#!/bin/sh
set -eu

# Docker volumes/tmpfs mounts can hide the ownership prepared at build time.
# Keep this startup step deliberately simple: some managed runtimes enable
# no-new-privileges and reject gosu/su-exec user switching. Running the tiny
# gunicorn app as the container user avoids the deploy loop while still making
# /data writable for saves and exports.
DATA_ROOT="${DATA_ROOT:-/data}"
mkdir -p "$DATA_ROOT/sessions"
chown -R braindump:braindump "$DATA_ROOT" 2>/dev/null || true
chmod 750 "$DATA_ROOT" "$DATA_ROOT/sessions" 2>/dev/null || true

exec "$@"
