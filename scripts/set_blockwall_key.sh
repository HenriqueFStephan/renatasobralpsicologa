#!/bin/bash
# Updates only the BLOCKWALL_KEY line in /opt/renata/debt.txt, then restarts the API.
# The new value is read from /tmp/blockwall.key so the rest of the file stays put.
set -euo pipefail

KEY_FILE=/tmp/blockwall.key
DEBT=/opt/renata/debt.txt
if [ ! -f "$KEY_FILE" ]; then
  echo "missing $KEY_FILE" >&2
  exit 1
fi
VALUE=$(cat "$KEY_FILE")
rm -f "$KEY_FILE"

touch "$DEBT"
python3 - "$DEBT" "$VALUE" <<'PY'
import sys
from pathlib import Path
path, value = sys.argv[1], sys.argv[2]
lines = Path(path).read_text(encoding="utf-8").splitlines()
found = False
out = []
for line in lines:
    if line.startswith("BLOCKWALL_KEY="):
        out.append("BLOCKWALL_KEY=" + value)
        found = True
    else:
        out.append(line)
if not found:
    out.append("BLOCKWALL_KEY=" + value)
Path(path).write_text("\n".join(out) + "\n", encoding="utf-8")
PY
chmod 600 "$DEBT"
systemctl restart renata-api
