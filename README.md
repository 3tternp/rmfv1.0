# rmfv1.0
A full-stack web application aligned with NIST RMF, ISO/IEC 27001, and SOC 2.

## 🧰 Tech Stack
- React (Frontend)
- Django + DRF (Backend)
- PostgreSQL (Database)
- Docker (Deployment)
- JWT Auth + PDF Export + Control Mapping

---

## 🚀 Getting Started (Local Setup)
**1. Clone the repo**
```
git clone https://github.com/3tternp/rmfv1.0
cd rmf-v1.0
```
**2. Generate .env file**
```
./generate_env.sh   # Linux/macOS
generate_env.bat    # Windows
```
**3. Start the application**
```
docker-compose up --build
```
# structure 

```
If you want to keep rmfuser as your project DB user, do this manually in PostgreSQL:

Open pgAdmin or the PostgreSQL CLI

Run the following SQL:
```
```
CREATE USER rmfuser WITH PASSWORD 'rmfpass';
CREATE DATABASE rmfdb OWNER rmfuser;
GRANT ALL PRIVILEGES ON DATABASE rmfdb TO rmfuser;
```
You can run these via terminal:
```
psql -U postgres
or inside pgAdmin's query tool.
```
rmfv1.0/
├── backend/             # Django backend
│   ├── manage.py
│   ├── rmf_api/
│   └── users/
├── frontend/            # React frontend
│   ├── public/
│   ├── src/
│   └── package.json
├── control_mappings/
│   └── mappings.json
├── docker/
│   ├── nginx/
│   └── pgadmin/
├── docker-compose.yml
├── generate_env.sh
├── generate_env.bat
├── .env.example
└── README.md
```
