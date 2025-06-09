@echo off
echo Creating .env file...

(
echo DEBUG=True
echo SECRET_KEY=changeme123
echo ALLOWED_HOSTS=localhost,127.0.0.1
echo DB_NAME=rmfuser
echo DB_USER=rmfuser
echo DB_PASSWORD=rmfuser
echo DB_HOST=db
echo DB_PORT=5432
echo REACT_APP_API_URL=http://localhost:8000
) > .env

echo .env file created successfully.
pause
