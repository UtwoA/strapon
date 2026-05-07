#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 2 ]]; then
  echo "Usage: $0 <release_dir> <deploy_path>"
  exit 1
fi

RELEASE_DIR="$1"
DEPLOY_PATH="$2"
LIVE_LINK="$DEPLOY_PATH/current"
RELEASES_PATH="$DEPLOY_PATH/releases"
RELEASE_NAME="$(date +%Y%m%d%H%M%S)"
NEW_RELEASE_PATH="$RELEASES_PATH/$RELEASE_NAME"

mkdir -p "$DEPLOY_PATH"
mkdir -p "$RELEASES_PATH"
mkdir -p "$NEW_RELEASE_PATH"

rsync -az --delete "$RELEASE_DIR"/ "$NEW_RELEASE_PATH"/

ln -sfn "$NEW_RELEASE_PATH" "$LIVE_LINK"

echo "Deployed to $LIVE_LINK -> $NEW_RELEASE_PATH"
