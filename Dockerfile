FROM python:3.11-slim

# ---------------------------------------------------------------------------
# Non-root user — reduce blast radius of any container breakout
# ---------------------------------------------------------------------------
RUN groupadd --system --gid 1001 braindump \
    && useradd  --system --uid 1001 --gid 1001 --no-create-home braindump

WORKDIR /app

# ---------------------------------------------------------------------------
# Dependencies — install before copying source so Docker layer is cached
# ---------------------------------------------------------------------------
COPY app/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt \
    && pip cache purge \
    && find /usr -name '*.pyc' -delete \
    && find /usr -name '__pycache__' -type d -exec rm -rf {} + 2>/dev/null || true

# ---------------------------------------------------------------------------
# Application source
# ---------------------------------------------------------------------------
COPY app/ .
COPY VERSION /app/VERSION

# Pre-create /data so the named volume inherits correct ownership on first run.
# Docker copies this directory into a new empty named volume automatically.
RUN mkdir -p /data/sessions \
    && chown -R braindump:braindump /data \
    && chown -R braindump:braindump /app \
    && chmod -R 550 /app \
    && chmod 444 /app/templates/index.html \
    && find /app/static -type f -exec chmod 444 {} +

# ---------------------------------------------------------------------------
# Runtime environment
# ---------------------------------------------------------------------------
ENV TZ=Europe/Berlin
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1
# Prevent gunicorn/Flask from leaking the Python version in headers
ENV PYTHONPATH=/app

USER braindump

EXPOSE 5000

# ---------------------------------------------------------------------------
# Health check
# ---------------------------------------------------------------------------
HEALTHCHECK --interval=30s --timeout=10s --start-period=15s --retries=3 \
  CMD python -c \
    "import urllib.request; urllib.request.urlopen('http://localhost:5000/health')" \
  || exit 1

# ---------------------------------------------------------------------------
# Gunicorn — production-hardened settings
#   --workers 2          : 2 sync workers, enough for a personal/small app
#   --timeout 90         : tolerate slow proxy handshakes or large exports
#   --graceful-timeout 30: let workers shut down gracefully during recycle
#   --keep-alive 65      : keep upstream connections stable behind reverse proxies
#   --max-requests 500   : recycle workers to prevent memory leaks
#   --max-requests-jitter: stagger recycling so not all workers restart at once
#   --forwarded-allow-ips: trust X-Forwarded-* only from localhost (NGINX)
# ---------------------------------------------------------------------------
CMD ["gunicorn", \
     "--bind",                   "0.0.0.0:5000", \
     "--workers",                "2", \
     "--timeout",                "90", \
     "--graceful-timeout",       "30", \
     "--keep-alive",             "65", \
     "--max-requests",           "500", \
     "--max-requests-jitter",    "50", \
     "--forwarded-allow-ips",    "127.0.0.1", \
     "--access-logfile",         "-", \
     "--error-logfile",          "-", \
     "--log-level",              "warning", \
     "app:app"]
