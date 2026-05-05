#!/bin/sh
set -eu

# Docker volumes/tmpfs mounts can hide the ownership prepared at build time.
# Fix it at container start before dropping to the unprivileged app user so
# session saves and Excel exports can always write to /data.
DATA_ROOT="${DATA_ROOT:-/data}"
mkdir -p "$DATA_ROOT/sessions"
chown -R braindump:braindump "$DATA_ROOT"
chmod 750 "$DATA_ROOT" "$DATA_ROOT/sessions"

exec gosu braindump "$@"
