import json
import os
import re
from datetime import datetime, timedelta
from pathlib import Path

import pytz
import openpyxl
from openpyxl.styles import Font, PatternFill
from flask import Flask, abort, jsonify, request, render_template, send_file
from werkzeug.middleware.proxy_fix import ProxyFix

# ---------------------------------------------------------------------------
# App setup
# ---------------------------------------------------------------------------
app = Flask(__name__)

# Trust one proxy layer (NGINX) for X-Forwarded-For / X-Forwarded-Proto
app.wsgi_app = ProxyFix(app.wsgi_app, x_for=1, x_proto=1, x_host=1)

# Reject bodies larger than 64 KB (more than enough for a journal entry)
app.config['MAX_CONTENT_LENGTH'] = 64 * 1024

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------
TZ        = pytz.timezone('Europe/Berlin')
DATA_ROOT = Path(os.environ.get('DATA_ROOT', '/data'))
DATA_DIR  = DATA_ROOT / 'sessions'
EXCEL_PATH = DATA_ROOT / 'brain_dump_log.xlsx'

MOOD_EMOJIS = ['😞', '😕', '😐', '🙂', '😄']

# Strict date validation — YYYY-MM-DD with valid month/day ranges
_DATE_RE = re.compile(
    r'^\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[01])$'
)

# ---------------------------------------------------------------------------
# Security headers (applied to every response)
# ---------------------------------------------------------------------------
@app.after_request
def add_security_headers(response):
    # Prevent MIME-type sniffing
    response.headers['X-Content-Type-Options'] = 'nosniff'
    # Block embedding in frames (clickjacking protection)
    response.headers['X-Frame-Options'] = 'DENY'
    response.headers['Content-Security-Policy'] = (
        "default-src 'self'; "
        "script-src 'self' 'unsafe-inline'; "
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; "
        "font-src 'self' https://fonts.gstatic.com; "
        "img-src 'self' data:; "
        "connect-src 'self'; "
        "frame-ancestors 'none'; "
        "base-uri 'self'; "
        "form-action 'self';"
    )
    response.headers['Referrer-Policy']   = 'strict-origin-when-cross-origin'
    response.headers['Permissions-Policy'] = 'geolocation=(), microphone=(), camera=()'
    # Remove Server header to avoid fingerprinting
    response.headers.pop('Server', None)
    return response

# ---------------------------------------------------------------------------
# Error handlers — no stack traces to the client
# ---------------------------------------------------------------------------
@app.errorhandler(400)
def bad_request(e):
    return jsonify({'error': 'Bad request'}), 400

@app.errorhandler(404)
def not_found(e):
    return jsonify({'error': 'Not found'}), 404

@app.errorhandler(413)
def too_large(e):
    return jsonify({'error': 'Request too large'}), 413

@app.errorhandler(500)
def server_error(e):
    return jsonify({'error': 'Internal server error'}), 500

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------
def now_berlin():
    return datetime.now(TZ)


def _validate_date(date_str: str):
    """Abort 400 if date_str is not a valid YYYY-MM-DD value."""
    if not _DATE_RE.match(date_str):
        abort(400)


def load_session(date_str: str):
    f = DATA_DIR / f'{date_str}.json'
    if f.exists():
        with open(f, 'r', encoding='utf-8') as fh:
            return json.load(fh)
    return None


def write_session(date_str: str, data: dict):
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    f = DATA_DIR / f'{date_str}.json'
    existing: dict = {}
    if f.exists():
        with open(f, 'r', encoding='utf-8') as fh:
            existing = json.load(fh)
    existing.update(data)
    with open(f, 'w', encoding='utf-8') as fh:
        json.dump(existing, fh, ensure_ascii=False, indent=2)
    return existing


def build_excel_row(date_str: str, session: dict):
    tasks  = session.get('tasks', [])
    wins   = session.get('wins', [])
    em_idx = session.get('evening_mood')
    mm_idx = session.get('morning_mood')
    em = MOOD_EMOJIS[int(em_idx) - 1] if em_idx else ''
    mm = MOOD_EMOJIS[int(mm_idx) - 1] if mm_idx else ''
    return [
        date_str,
        em,
        session.get('brain_dump', ''),
        ', '.join(wins),
        tasks[0]['text'] if len(tasks) > 0 else '',
        tasks[1]['text'] if len(tasks) > 1 else '',
        tasks[2]['text'] if len(tasks) > 2 else '',
        session.get('intention', ''),
        mm,
        session.get('morning_note', ''),
        'Yes' if len(tasks) > 0 and tasks[0].get('done') else ('No' if len(tasks) > 0 else ''),
        'Yes' if len(tasks) > 1 and tasks[1].get('done') else ('No' if len(tasks) > 1 else ''),
        'Yes' if len(tasks) > 2 and tasks[2].get('done') else ('No' if len(tasks) > 2 else ''),
    ]

# ---------------------------------------------------------------------------
# Routes
# ---------------------------------------------------------------------------
@app.route('/health')
def health():
    return jsonify({'status': 'ok'})


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api/session/<date_str>', methods=['GET'])
def get_session(date_str):
    _validate_date(date_str)
    return jsonify(load_session(date_str))


@app.route('/api/session/<date_str>', methods=['POST'])
def post_session(date_str):
    _validate_date(date_str)
    data = request.get_json(silent=True)
    if not data or not isinstance(data, dict):
        abort(400)
    result = write_session(date_str, data)
    return jsonify({'status': 'saved', 'session': result})


@app.route('/api/export/excel/<date_str>', methods=['POST'])
def export_excel(date_str):
    _validate_date(date_str)
    session = load_session(date_str)
    if not session:
        abort(404)

    EXCEL_PATH.parent.mkdir(parents=True, exist_ok=True)

    headers = [
        'Date', 'Evening Mood', 'Brain Dump', 'Wins',
        'Task 1', 'Task 2', 'Task 3', 'Intention',
        'Morning Mood', 'Morning Note',
        'Task 1 Done', 'Task 2 Done', 'Task 3 Done',
    ]

    if EXCEL_PATH.exists():
        wb = openpyxl.load_workbook(EXCEL_PATH)
        ws = wb.active
        updated = False
        for row_idx, row in enumerate(ws.iter_rows(min_row=2), start=2):
            if row[0].value == date_str:
                for col_idx, value in enumerate(build_excel_row(date_str, session), start=1):
                    ws.cell(row=row_idx, column=col_idx, value=value)
                updated = True
                break
        if not updated:
            ws.append(build_excel_row(date_str, session))
    else:
        wb = openpyxl.Workbook()
        ws = wb.active
        ws.title = 'Brain Dump'
        ws.append(headers)
        for cell in ws[1]:
            cell.font = Font(bold=True)
            cell.fill = PatternFill('solid', fgColor='FFF59E0B')
        ws.append(build_excel_row(date_str, session))

    for col in ws.columns:
        max_len = max((len(str(c.value or '')) for c in col), default=0)
        ws.column_dimensions[col[0].column_letter].width = min(max_len + 4, 60)

    wb.save(EXCEL_PATH)

    return send_file(
        EXCEL_PATH,
        as_attachment=True,
        download_name='brain_dump_log.xlsx',
        mimetype='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    )


@app.route('/api/export/markdown/<date_str>', methods=['GET'])
def export_markdown(date_str):
    _validate_date(date_str)
    session = load_session(date_str)
    if not session:
        abort(404)

    em_idx = session.get('evening_mood')
    mm_idx = session.get('morning_mood')
    em = MOOD_EMOJIS[int(em_idx) - 1] if em_idx else '—'
    mm = MOOD_EMOJIS[int(mm_idx) - 1] if mm_idx else None

    wins  = session.get('wins', [])
    tasks = session.get('tasks', [])

    wins_md  = '\n'.join(f'- {w}' for w in wins)  if wins  else '- —'
    tasks_md = '\n'.join(f'- [ ] {t["text"]}' for t in tasks) if tasks else '- —'

    md = (
        f'# Brain Dump — {date_str}\n\n'
        f'**Evening Mood:** {em}\n\n'
        f'## What was on my mind\n{session.get("brain_dump", "").strip() or "—"}\n\n'
        f'## What went well today\n{wins_md}\n\n'
        f'## Tasks for tomorrow\n{tasks_md}\n\n'
        f'## My intention for tomorrow\n> {session.get("intention", "").strip() or "—"}\n'
    )

    if mm:
        morning_date = session.get('morning_date', date_str)
        task_status_md = '\n'.join(
            f'- [x] {t["text"]}' if t.get('done') else f'- [ ] {t["text"]}'
            for t in tasks
        ) if tasks else '- —'
        export_ts = now_berlin().strftime('%Y-%m-%d %H:%M')
        md += (
            f'\n---\n\n'
            f'## Morning Check-in — {morning_date}\n\n'
            f'**Morning Mood:** {mm}\n\n'
            f'### Task Status\n{task_status_md}\n\n'
            f'### Additional focus today\n{session.get("morning_note", "").strip() or "—"}\n\n'
            f'---\n*Exported at {export_ts}*\n'
        )
    else:
        export_ts = now_berlin().strftime('%Y-%m-%d %H:%M')
        md += f'\n---\n*Exported at {export_ts}*\n'

    return jsonify({'markdown': md})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)
