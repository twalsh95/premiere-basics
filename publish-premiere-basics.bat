@echo off
REM Saves your changes and publishes Premiere Basics Missions.
REM The app updates about 1-2 minutes after this finishes.
REM First time only: the GitHub repo twalsh95/premiere-basics must exist (see README.md, "Publish").
cd /d "%~dp0"

git remote get-url origin >nul 2>&1
if errorlevel 1 git remote add origin https://github.com/twalsh95/premiere-basics.git

git add -A
git commit -m "Update Premiere Basics Missions" >nul 2>&1
if errorlevel 1 echo No new changes to save. Pushing anyway.

echo Uploading to GitHub. A sign-in window may open the first time.
git push -u origin main

echo.
echo Done. Check progress at https://github.com/twalsh95/premiere-basics/actions
echo The app is at https://walshclassroom.com/premiere-basics/
pause
