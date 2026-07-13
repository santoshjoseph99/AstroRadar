#!/bin/bash

# Target directory
ASSETS_DIR="android/app/src/main/assets"

echo "=== Syncing Web Assets to Android App Assets ==="

# Create directory if it doesn't exist
if [ ! -d "$ASSETS_DIR" ]; then
    echo "Creating directory: $ASSETS_DIR"
    mkdir -p "$ASSETS_DIR"
fi

# Copy files
echo "Copying files from public/ to $ASSETS_DIR..."
cp public/index.html "$ASSETS_DIR/"
cp public/style.css "$ASSETS_DIR/"
cp public/app.js "$ASSETS_DIR/"
cp public/stars.js "$ASSETS_DIR/"

echo "Sync Complete! Target assets folder populated."
ls -la "$ASSETS_DIR"
