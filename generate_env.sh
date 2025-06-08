#!/bin/bash

echo "Creating .env file..."

cat <<EOF > .env
DEBUG=True
SECRET_KEY=changeme123
ALLOWED_HOSTS=localhost,127.0.0.1
DB_NAME=postgres
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=db
DB_PORT=5432
REACT_APP_API_URL=http://localhost:8000
EOF

echo ".env file created successfully."
