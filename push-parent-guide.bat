@echo off
REM ================================================
REM Automatski git commit i push za Parent Guide
REM ================================================

REM Postavi folder gdje se nalazi lokalni repozitorij
cd /d "C:\PRIVATE\AI\IDSS_Parent_Guide"

REM Dodaj sve promjene
git add .

REM Napravi commit sa trenutnim datumom i vremenom
set DATETIME=%DATE%_%TIME%
git commit -m "Auto commit %DATETIME%"

REM Push na GitHub main branch
git push origin main

REM Poruka o završenom pushu
echo.
echo ===============================
echo ✅ Push završen!
echo ===============================
pause