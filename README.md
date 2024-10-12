# Beomsu's Digital Garden


## Update Content
This digital garden uses a custom script to update content. The script does the following:

1. Searches for Markdown files in the Ataraxia vault directory.
2. Copies only files with the 'public' tag to the Quartz content directory.
3. Excludes specified directories from the search.
4. Updates the Quartz site and pushes changes to the repository.

To update the content, run the following command:

```bash
./update-version.sh
```

Make sure the script has execute permissions:

```bash
chmod +x update-version.sh
```
