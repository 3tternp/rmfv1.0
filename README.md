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
```
1. Clone the repo
git clone https://github.com/3tternp/rmfv1.0
cd rmf-v1.0
```
Generate .env file
```
./generate_env.sh   # Linux/macOS
generate_env.bat    # Windows
```
Start the application
```
docker-compose up --build
```
# structure 

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
