# BrainDumpApp

![Version](https://img.shields.io/badge/version-1.4.0-6366f1)
![Docker](https://img.shields.io/badge/docker-alexrosbach%2Fbraindumpapp-2496ed)
![License](https://img.shields.io/badge/license-MIT-green)

BrainDumpApp is a small self-hosted daily reflection app for an evening check-out and morning check-in routine. It helps you clear your head, capture wins, plan the next day, and export the result as Excel or Markdown.

## Features

- Guided evening flow: mood, brain dump, wins, top 3 tasks, next-day intention
- Morning check-in: review yesterday's intention, mark tasks done, add mood/focus note
- Excel export/import for portable daily logs
- Markdown export for notes apps such as Joplin
- German/English UI
- Dark/light mode
- Local container storage under `/data`
- Docker-first deployment

## Screens and UX

The UI uses a compact LanLens-inspired design system: dark default theme, light mode, amber evening accent, emerald morning accent, sticky header, mobile-first layout, and footer attribution with a GitHub project link.

## Docker Images

Images are published on Docker Hub:

```bash
docker pull alexrosbach/braindumpapp:1.4.0
# or
docker pull alexrosbach/braindumpapp:latest
```

## Quick Start

```bash
docker run -d \
  --name braindumpapp \
  -p 5000:5000 \
  -v braindump-data:/data \
  --restart unless-stopped \
  alexrosbach/braindumpapp:1.4.0
```

Open:

```text
http://localhost:5000
```

## Docker Compose

```yaml
services:
  braindump:
    image: alexrosbach/braindumpapp:1.4.0
    ports:
      - "5000:5000"
    volumes:
      - braindump-data:/data
    environment:
      - TZ=Europe/Berlin
    restart: unless-stopped

volumes:
  braindump-data:
```

The included `docker-compose.yml` follows this structure.

## Data and Export

BrainDumpApp stores runtime data locally in `/data`:

```text
/data/sessions/YYYY-MM-DD.json
/data/brain_dump_log.xlsx
```

Mount `/data` as a Docker volume if the data should survive container recreation.

### Excel Export

The Excel export creates or updates `/data/brain_dump_log.xlsx` and downloads a copy named:

```text
brain_dump_log_YYYY-MM-DD.xlsx
```

If a row for the date already exists, it is updated instead of duplicated.

### Markdown Export

Markdown export returns a note-style daily summary with evening and morning sections and can be copied directly from the UI.

## API

```http
GET /api/health
```

```json
{"status":"ok","service":"BrainDumpApp","version":"1.4.0"}
```

```http
GET /version
```

```json
{"version":"1.4.0"}
```

Main endpoints:

- `GET /api/session/{YYYY-MM-DD}`
- `POST /api/session/{YYYY-MM-DD}`
- `POST /api/export/excel/{YYYY-MM-DD}`
- `GET /api/export/markdown/{YYYY-MM-DD}`
- `POST /api/import/excel`

## Local Development

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r app/requirements.txt
DATA_ROOT=./data python app/app.py
```

Open `http://localhost:5000`.

## Security Notes

- Container runs the app process as non-root after startup ownership checks
- `/data` is created and owned by the app user on container start
- Request size is limited to 2 MB for Excel uploads
- Session writes only persist known whitelisted fields
- Date parameters are validated before file access
- Error responses avoid stack traces
- Security headers are set for every response

## Reverse Proxy

Example NGINX location:

```nginx
location / {
    proxy_pass http://127.0.0.1:5000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_connect_timeout 10s;
    proxy_send_timeout 90s;
    proxy_read_timeout 90s;
    client_max_body_size 2m;
}
```

## Versioning

The app version is stored in `VERSION`, exposed through `/version`, and shown in the UI header.

## Changelog

See [CHANGELOG.md](CHANGELOG.md).

## License

MIT — see [LICENSE](LICENSE).
