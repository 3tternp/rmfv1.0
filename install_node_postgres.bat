@echo off
echo ======================================
echo Installing Node.js and PostgreSQL (Windows)
echo ======================================

:: Step 1: Install Node.js (LTS)
echo Downloading Node.js...
powershell -Command "Invoke-WebRequest https://nodejs.org/dist/v18.18.2/node-v18.18.2-x64.msi -OutFile node_installer.msi"
echo Installing Node.js...
msiexec /i node_installer.msi /quiet

:: Step 2: Install PostgreSQL using Chocolatey
echo Checking for Chocolatey...
where choco >nul 2>&1 || (
    echo Installing Chocolatey...
    powershell -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command ^
     "Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))"
)

echo Installing PostgreSQL 14 via Chocolatey...
choco install postgresql14 --params "/Password:postgres" -y

:: Step 3: Add PostgreSQL to PATH (if needed)
setx PATH "%PATH%;C:\Program Files\PostgreSQL\14\bin"

echo.
echo ✅ Installation complete.
echo 🔑 Default DB user: rmfuser
echo 🔐 Password: rmfuser
echo 🚀 You may need to restart PowerShell for PATH changes to apply.

pause
