@echo off
REM ================================================
REM Automatski force push za Parent Guide
REM ================================================

REM Postavi folder gdje se nalazi lokalni repozitorij
cd /d "C:\PRIVATE\AI\IDSS_Parent_Guide"

REM Dodaj sve promjene
git add .

REM Napravi commit sa trenutnim datumom i vremenom
set DATETIME=%DATE%_%TIME%
git commit -m "Auto commit %DATETIME%"

REM Force push na GitHub main branch (prepisuje sve na remote)
git push -f origin main

REM Poruka o završenom pushu
echo.
echo ===============================
echo ✅ Force push završen!
echo ===============================
pause