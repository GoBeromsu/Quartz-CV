#!/bin/bash

VAULT_DIR="$HOME/Documents/Ataraxia"
QUARTZ_CONTENT_DIR="$HOME/Documents/quartz/content"
EXCLUDE_DIRS=("50. Calendar" "60. Resources" "70. Settings")

# Create the exclude arguments for find command
EXCLUDE_ARGS=()
for dir in "${EXCLUDE_DIRS[@]}"; do
    EXCLUDE_ARGS+=(-not -path "*/${dir}/*")
done

# Calculate total number of visible .md files, excluding specified directories
total_files=$(find "$VAULT_DIR" -type f -name "*.md" ! -path '*/.*' "${EXCLUDE_ARGS[@]}" | wc -l)
processed_files=0

echo "Total files to process: $total_files"

# Find and copy files with 'public' tag, skipping hidden files and excluded directories
find "$VAULT_DIR" -type f -name "*.md" ! -path '*/.*' "${EXCLUDE_ARGS[@]}" | while read -r file; do
    if grep -qE "tags:.*public|tags:\s*\[.*public.*\]|tags:(\s*-\s*\w+\s*)*\s*-\s*public" "$file"; then
        # Create the directory structure if it doesn't exist
        mkdir -p "$QUARTZ_CONTENT_DIR/$(dirname "${file#$VAULT_DIR}")"
        # Copy the file to the corresponding directory in QUARTZ_CONTENT_DIR
        cp "$file" "$QUARTZ_CONTENT_DIR/${file#$VAULT_DIR}"
        echo "Copied: $(basename "$file")"
    fi
    
    processed_files=$((processed_files + 1))
    progress=$(awk "BEGIN {printf \"%.2f\", $processed_files / $total_files * 100}")
    
    echo "Processed: $(basename "$file")"
    echo "Progress: $processed_files / $total_files ($progress%)"
    echo "-------------------"
done

echo "Processing completed"
echo "Files processed: $processed_files / $total_files"

npx quartz update
git add *
git commit -m "Update blog"
git push