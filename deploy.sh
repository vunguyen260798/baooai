#!/usr/bin/env bash
# Build baooai (Vite + React static site) locally and sync the output to the server.
#
# Usage:
#   SERVER_HOST=1.2.3.4 ./deploy.sh
#
# Config (env vars, all optional except SERVER_HOST):
#   SERVER_HOST   - server IP/hostname (required)
#   SERVER_USER   - ssh user                  (default: root)
#   SERVER_PORT   - ssh port                  (default: 22)
#   WEB_ROOT      - static files serve dir     (default: /var/www/baooai/dist, see conf.d/ai.conf)
#   SSH_KEY       - path to private key        (default: ~/.ssh/id_ed25519)

set -euo pipefail

SERVER_HOST="${SERVER_HOST:?Set SERVER_HOST, e.g. SERVER_HOST=1.2.3.4 ./deploy.sh}"
SERVER_USER="${SERVER_USER:-root}"
SERVER_PORT="${SERVER_PORT:-22}"
WEB_ROOT="${WEB_ROOT:-/var/www/baooai/dist}"
SSH_KEY="${SSH_KEY:-$HOME/.ssh/id_ed25519}"

SSH_OPTS=(-i "$SSH_KEY" -p "$SERVER_PORT" -o StrictHostKeyChecking=accept-new)

echo "🔨 Building locally..."
npm ci
npm run build

echo "📂 Ensuring ${WEB_ROOT} exists on server..."
ssh "${SSH_OPTS[@]}" "${SERVER_USER}@${SERVER_HOST}" "sudo mkdir -p '${WEB_ROOT}'"

echo "📦 Syncing build output to ${SERVER_USER}@${SERVER_HOST}:${WEB_ROOT} ..."
rsync -avz --delete \
  -e "ssh ${SSH_OPTS[*]}" \
  --rsync-path="sudo rsync" \
  dist/ "${SERVER_USER}@${SERVER_HOST}:${WEB_ROOT}/"

echo "✅ Deployment completed successfully!"
