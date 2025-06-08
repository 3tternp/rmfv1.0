@echo off
echo ===============================
echo  RMF-v1.0 Django Backend Setup
echo ===============================
echo.

:: Step 1: Create virtual environment
echo Creating Python virtual environment...
python -m venv env

:: Step 2: Activate virtual environment
echo Activating virtual environment...
call env\Scripts\activate.bat

:: Step 3: Upgrade pip
echo Upgrading pip...
python -m pip install --upgrade pip

:: Step 4: Install dependencies
echo Installing dependencies from requirements.txt...
pip install -r requirements.txt

:: Step 5: Run migrations
echo Running migrations...
python manage.py makemigrations
python manage.py migrate

:: Step 6: Create admin user
echo Creating admin user (admin@rmf.io / password123)...
python manage.py shell -c "from django.contrib.auth.models import User; User.objects.filter(username='admin').exists() or User.objects.create_superuser('admin', 'admin@rmf.io', 'password123')"

:: Step 7: Run development server
echo Starting Django server at http://localhost:8000...
python manage.py runserver

pause
