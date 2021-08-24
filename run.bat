@echo off
git add -A
git commit -m "submit%date:~0,4%-%date:~5,2%-%date:~8,2%" 
git push -u origin main


pause
