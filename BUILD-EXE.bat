@echo off
cd /d "%~dp0"
where node >nul 2>&1
if errorlevel 1 (
  echo Node.js is required only on this BUILD computer.
  echo Install Node.js LTS, then run this file again.
  pause
  exit /b 1
)
call npm install
if errorlevel 1 goto :error
call npm run dist:win
if errorlevel 1 goto :error
echo.
echo DONE. Installer is inside the dist folder.
echo Target computers do NOT need Python or Node.js.
pause
exit /b 0
:error
echo.
echo Build failed. Review the messages above.
pause
exit /b 1
