#!/bin/bash

VAULT_DIR="$HOME/Documents/Ataraxia"
QUARTZ_CONTENT_DIR="$HOME/Documents/quartz/content"
EXCLUDE_DIRS=("50. Calendar" "60. Resources" "70. Settings")

# Create the exclude arguments for find command
EXCLUDE_ARGS=()
for dir in "${EXCLUDE_DIRS[@]}"; do
    EXCLUDE_ARGS+=(-not -path "*/${dir}/*")
done

# Function to check if a file has the 'public' tag
has_public_tag() {
    local file="$1"
    awk '
    /^---$/ {in_front_matter = !in_front_matter; next}
    in_front_matter && /^tags:/ {in_tags = 1; next}
    in_tags && /^[a-zA-Z]/ && !/^  -/ {in_tags = 0}
    in_tags && (/public/ || /public,/ || /"public"/ || /"public",/ || /\[public\]/ || /- public/) {found = 1; exit}
    /tags:.*\[.*public.*\]/ {found = 1; exit}
    /\[public\]/ {found = 1; exit}
    END {exit !found}
    ' "$file"
}

# Function to rsync a single file
rsync_file() {
    local source="$1"
    local dest="$QUARTZ_CONTENT_DIR/${source#$VAULT_DIR}"
    local dest_dir=$(dirname "$dest")
    
    echo "Syncing file: $source to $dest"
    
    # Create destination directory if it doesn't exist
    mkdir -p "$dest_dir"
    # Use rsync to copy the file, forcing overwrite and ignoring existing files
    rsync -av --delete  "$source" "$dest"
}

# Calculate total number of visible .md files, excluding specified directories
total_files=$(find "$VAULT_DIR" -type f -name "*.md" ! -path '*/.*' "${EXCLUDE_ARGS[@]}" | wc -l)
processed_files=0

echo "Total files to process: $total_files"

# Find and sync files with 'public' tag, skipping hidden files and excluded directories
find "$VAULT_DIR" -type f -name "*.md" ! -path '*/.*' "${EXCLUDE_ARGS[@]}" | while read -r file; do
    if has_public_tag "$file"; then
        rsync_file "$file"
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
# git push
