#!/bin/bash
# Runs on the server as root. Does not replace /opt/renata/debt.txt.
set -euo pipefail

rm -rf /var/www/renata
mkdir -p /var/www/renata
tar -xzf /tmp/site.tgz -C /var/www/renata

mkdir -p /opt/renata
tar -xzf /tmp/api.tgz -C /opt/renata

/opt/renata/venv/bin/pip install -r /opt/renata/backend/requirements.txt
mkdir -p /opt/renata/backend/data
chown -R www-data:www-data /var/www/renata /opt/renata/backend/data

systemctl restart renata-api
systemctl reload nginx

API_PORT=8000
if [ -f /opt/renata/api.port ]; then
  API_PORT=$(tr -d '[:space:]' </opt/renata/api.port)
fi

for _ in $(seq 1 30); do
  if curl -fsS "http://127.0.0.1:${API_PORT}/health"; then
    echo
    exit 0
  fi
  sleep 1
done

echo "API health check failed" >&2
exit 1
