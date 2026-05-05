# Changelog

All notable changes to BrainDumpApp are documented in this file.

## v1.4.0 — Export reliability and UI polish

### Fixed
- Fixed Docker volume ownership at container startup so session saves and Excel exports work reliably with named volumes, bind mounts, and tmpfs mounts.
- Improved Excel export robustness by sanitizing mood/task data before workbook generation.
- Delayed browser object URL cleanup after Excel download to avoid aborted downloads in stricter/mobile browsers.

### Changed
- Added `/api/health` with service and version metadata.
- Excel downloads now include the exported date in the filename.
- Docker Compose now uses a persistent named `/data` volume by default.
- Updated app version to `1.4.0`.

### UI
- Added a footer crediting Alex Rosbach with a GitHub project link.
- Polished the landing page, background, cards, and data note styling.

### Documentation
- Reworked README structure to match the LanLens-style project layout.
- Added MIT license file.
- Added dedicated changelog.

## v1.3.0 — Hardening and export buffering

- Session writes only persist whitelisted fields.
- Excel export serves the download from an in-memory buffer.
- Frontend save/export errors are surfaced instead of being silently swallowed.
- Morning startup waits for session loading before rendering.
- Docker health check timing aligned with startup behavior.

## v1.2.0 — Version endpoint and import flow

- Added central `VERSION` file and `/version` endpoint.
- Added version display in the UI.
- Added Excel import fallback for morning check-ins.
- Added landing page and GitHub link.

## v1.0.0 — Initial release

- Evening check-out and morning check-in flows.
- Excel and Markdown export.
- Dark/light theme.
- German/English UI.
