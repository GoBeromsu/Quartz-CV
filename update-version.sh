cd /Users/beomsu/Documents/quartz
rsync -av --delete ~/Documents/Ataraxia/80.\ Blog/ ~/Documents/quartz/content/
npx quartz update
git add *
git commit -m "Update blog"
git push