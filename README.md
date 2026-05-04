# BrainDumpApp: Daily Reflection Routine

BrainDumpApp is a self-hosted web application designed to support a structured daily reflection habit. The tool guides users through an evening check-out routine and a morning check-in routine, capturing mood, thoughts, wins, priorities, and intentions in a calm, distraction-free interface.

## Core Capabilities

The application provides two complementary routines that together form a complete daily reflection cycle. The **Evening Check-out** is a five-step guided flow covering mood rating, free-text brain dump, wins of the day, top-three tasks for tomorrow, and a personal intention for the next day. The **Morning Check-in** loads the previous evening's session and presents yesterday's intention prominently, offers an interactive task checklist to track carry-over items, and collects a mood rating and a focus note for the day ahead.

All session data is stored as JSON files on a mounted Docker volume, making it portable and backup-friendly without requiring a database server. Each day's data lives in a single file (`YYYY-MM-DD.json`), and morning check-in data is merged back into the previous day's file to keep records self-contained.

## Technical Foundation

The deployment combines Flask as the backend, plain HTML/CSS/JavaScript for the single-page frontend, and openpyxl for Excel export. The interface uses the Inter typeface and a design language modelled after LanLens. The entire application runs in a single Docker container based on Python 3.11-slim, served by gunicorn and designed to sit behind a reverse proxy for TLS termination. A named Docker volume persists all session data and the cumulative Excel log independently of container lifecycle.

## App Modes

The interface auto-detects the appropriate mode based on local browser time:

| Time window | Behaviour |
|---|---|
| Before 11:00 | Morning Check-in opens automatically |
| After 16:00  | Evening Check-out opens automatically |
| 11:00 – 16:00 | Both modes are offered via a selector screen |

**Evening Check-out** uses warm amber tones. **Morning Check-in** uses emerald tones. Both modes are also available manually at any time via the mode selector.

## Getting Started

Requires Docker 20.10+ with Compose support.

**1. Clone the repository**
```bash
git clone https://github.com/AlexRosbach/BrainDumpApp.git
cd BrainDumpApp
```

**2. Start the container**
```bash
docker-compose up -d
```

**3. Open the app**

Navigate to `http://localhost:5000` in your browser or on your iPad.

The `/data` volume is created automatically on first launch. No further configuration is required.

**Local development (without Docker)**

```bash
cp .env.example .env      # sets DATA_ROOT=./data
pip install flask openpyxl pytz
cd app && DATA_ROOT=../data python app.py
```

## Reverse Proxy

The application is designed to run behind a reverse proxy (e.g. NGINX) that handles TLS termination. Flask processes `X-Forwarded-For` and `X-Forwarded-Proto` headers via Werkzeug's `ProxyFix` middleware. Set `client_max_body_size 64k` on the proxy side to match the app's request size limit.

## Security Hardening

The following measures are active by default:

| Layer | Measure |
|---|---|
| Docker image | Non-root user (`braindump`, uid 1001) |
| Docker image | Application files read-only (`chmod 550`/`444`) |
| Docker image | `.pyc` files and pip cache removed from image |
| gunicorn | `--max-requests 500` — workers recycled to prevent memory leaks |
| gunicorn | `--forwarded-allow-ips 127.0.0.1` — only trust proxy headers from localhost |
| Flask | `ProxyFix` middleware for correct client IP logging behind NGINX |
| Flask | `MAX_CONTENT_LENGTH = 64 KB` — rejects oversized request bodies |
| Flask | Date parameter validated against `YYYY-MM-DD` regex before file access |
| Flask | No stack traces in error responses |
| HTTP headers | `X-Content-Type-Options: nosniff` |
| HTTP headers | `X-Frame-Options: DENY` |
| HTTP headers | `Content-Security-Policy` (script/style/font sources locked down) |
| HTTP headers | `Referrer-Policy: strict-origin-when-cross-origin` |
| HTTP headers | `Permissions-Policy` — geolocation, microphone, camera denied |
| HTTP headers | `Server` header removed |

**Note on Content-Security-Policy:** The frontend uses inline `onclick` handlers inside JavaScript-generated HTML, which requires `script-src 'unsafe-inline'`. All user input rendered back into the page is escaped via `escHtml()` before insertion, so no user-controlled string can inject executable code.

## Data & Export

Session files are written to `/data/sessions/YYYY-MM-DD.json` inside the container, persisted on the `braindump_data` named volume.

```json
{
  "evening_mood": 4,
  "brain_dump": "...",
  "wins": ["...", "..."],
  "tasks": [{ "text": "...", "done": false }],
  "intention": "...",
  "morning_mood": 3,
  "morning_note": "...",
  "morning_date": "YYYY-MM-DD"
}
```

**Excel Export** — generates or updates `brain_dump_log.xlsx` in the `/data` volume. Each row represents one day. If a row for that date already exists it is updated in place rather than duplicated.

**Markdown Export** — generates a Joplin-compatible Markdown note combining evening and morning data into a single document, with one-click clipboard copy.

## Internationalization

The interface is available in German (default) and English. The language toggle is always visible in the header. The preference persists in `localStorage`.

## Dark Mode

A `☀️ / 🌙` toggle in the header switches between a deep dark theme (default, `#0f1117` background) and a light theme. The preference persists in `localStorage`.

## Health Check

```
GET /health
→ {"status": "ok"}
```

The Docker health check polls this endpoint every 30 seconds.

## Docker Reference

```yaml
services:
  braindump:
    build: .
    ports:
      - "5000:5000"
    volumes:
      - braindump_data:/data
    environment:
      - TZ=Europe/Berlin
    restart: unless-stopped

volumes:
  braindump_data:
```

Change `TZ` to match your timezone if deploying outside Central Europe.
