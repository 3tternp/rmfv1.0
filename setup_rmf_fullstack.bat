@echo off
echo =======================================
echo  RMF-v1.0 Fullstack Setup (Backend + Frontend)
echo =======================================
echo.

REM ---- Step 1: Setup backend ----
cd backend

echo Creating Python virtual environment for backend...
python -m venv env

echo Activating backend environment...
call env\Scripts\activate.bat

echo Upgrading pip...
python -m pip install --upgrade pip

echo Installing backend dependencies...
pip install -r requirements.txt

echo Running Django migrations...
python manage.py makemigrations
python manage.py migrate

echo Creating admin user (admin@rmf.io / password123)...
python manage.py shell -c "from django.contrib.auth.models import User; User.objects.filter(username='admin').exists() or User.objects.create_superuser('admin', 'admin@rmf.io', 'password123')"

echo Starting Django server at http://localhost:8000...
start cmd /k python manage.py runserver

cd ..

REM ---- Step 2: Setup frontend ----
cd frontend

echo Installing frontend dependencies...
call npm install

echo Starting React frontend at http://localhost:3000...
start cmd /k npm start

cd ..

echo ---------------------------------------
echo ✅ Both backend and frontend are running.
echo Backend: http://localhost:8000
echo Frontend: http://localhost:3000
echo ---------------------------------------

pause
