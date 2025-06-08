#!/bin/bash

echo "======================================="
echo " RMF-v1.0 Fullstack Setup (Linux/macOS)"
echo "======================================="

# ---- Step 1: Setup Backend ----
cd backend || exit

echo "[Backend] Creating Python virtual environment..."
python3 -m venv env

echo "[Backend] Activating virtual environment..."
source env/bin/activate

echo "[Backend] Upgrading pip..."
pip install --upgrade pip

echo "[Backend] Installing dependencies..."
pip install -r requirements.txt

echo "[Backend] Running migrations..."
python manage.py makemigrations
python manage.py migrate

echo "[Backend] Creating admin user..."
python manage.py shell -c "from django.contrib.auth.models import User; User.objects.filter(username='admin').exists() or User.objects.create_superuser('admin', 'admin@rmf.io', 'password123')"

echo "[Backend] Starting Django server at http://localhost:8000..."
gnome-terminal -- bash -c "python manage.py runserver; exec bash"

cd ..

# ---- Step 2: Setup Frontend ----
cd frontend || exit

echo "[Frontend] Installing npm dependencies..."
npm install

echo "[Frontend] Starting React app at http://localhost:3000..."
gnome-terminal -- bash -c "npm start; exec bash"

cd ..

# ---- Final Message ----
echo "---------------------------------------"
echo " ✅ Both backend and frontend are running."
echo " Backend: http://localhost:8000"
echo " Frontend: http://localhost:3000"
echo "---------------------------------------"

# Optionally open in browser
if command -v xdg-open &> /dev/null; then
    xdg-open http://localhost:8000
    xdg-open http://localhost:3000
fi
