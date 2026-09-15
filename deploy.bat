@echo off
title BA.devlog - Deploy len Cloudflare Pages
cd /d "%~dp0"
echo ============================================
echo   Dang build va deploy len Cloudflare...
echo   Web: https://tannguyen-bablog.pages.dev
echo ============================================
call npm run build
if errorlevel 1 (
  echo [LOI] Build that bai - dung lai de kiem tra.
  pause
  exit /b 1
)
call npx wrangler pages deploy out --project-name=tannguyen-bablog
echo.
echo Xong! Mo https://tannguyen-bablog.pages.dev de xem.
pause
