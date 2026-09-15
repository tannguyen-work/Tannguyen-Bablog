@echo off
title BA.devlog - Blog Server
cd /d "%~dp0"
echo ============================================
echo   BA.devlog - Dang khoi dong server...
echo   Mo trinh duyet: http://localhost:3000
echo   (Giu cua so nay mo trong luc dung web)
echo   Bam Ctrl+C hoac dong cua so de tat server
echo ============================================
npm run dev
pause
