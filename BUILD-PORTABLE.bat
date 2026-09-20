@echo off
cd /d "%~dp0"
where node >nul 2>&1
if errorlevel 1 (
  echo Node.js is required only on this BUILD computer.
  pause
  exit /b 1
)
call npm install
if errorlevel 1 goto :error
call npm run portable:win
if errorlevel 1 goto :error
echo.
echo DONE. Portable EXE is inside the dist folder.
pause
exit /b 0
:error
echo Build failed.
pause
exit /b 1
