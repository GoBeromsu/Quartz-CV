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
    # Extract front matter
    front_matter=$(sed -n '/^---$/,/^---$/p' "$file")
    
    # Check for 'public' tag in various formats
    echo "$front_matter" | grep -qE '^\s*tags:.*public' ||
    echo "$front_matter" | grep -qE '^\s*tags:\s*\[.*public.*\]' ||
    echo "$front_matter" | awk '/^\s*tags:/ {
        if ($0 ~ /\[/) {
            in_array=1
        } else if (in_array && $0 ~ /\]/) {
            in_array=0
        }
        if (in_array || $0 ~ /^\s*tags:/) {
            if ($0 ~ /\bpublic\b/) {
                found=1
                exit
            }
        }
        in_list=1
    }
    in_list && /^\s*-/ {
        if ($0 ~ /\bpublic\b/) {
            found=1
            exit
        }
    }
    END {exit !found}'
}

# Function to rsync a single file
rsync_file() {
    local source="$1"
    local dest="$QUARTZ_CONTENT_DIR/${source#$VAULT_DIR}"
    local dest_dir=$(dirname "$dest")
    
    # Create destination directory if it doesn't exist
    mkdir -p "$dest_dir"
    
    # Use rsync to copy the file
    rsync -av --checksum "$source" "$dest"
    
    echo "Synced: $(basename "$source")"
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
git push
