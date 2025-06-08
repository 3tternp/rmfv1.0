#!/bin/bash

echo "======================================"
echo " Installing Node.js and PostgreSQL"
echo "======================================"

# Step 1: Install Node.js LTS
echo "📦 Installing Node.js LTS..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Step 2: Install PostgreSQL
echo "📦 Installing PostgreSQL..."
sudo apt-get update
sudo apt-get install -y postgresql postgresql-contrib

# Step 3: Set PostgreSQL password
echo "🔐 Setting password for user 'postgres'..."
sudo -u postgres psql -c "ALTER USER postgres PASSWORD 'postgres';"

echo ""
echo "✅ Done!"
echo "🔑 PostgreSQL user: postgres"
echo "🔐 Password: postgres"
echo "🛠 Node version: $(node -v)"
echo "🛠 NPM version: $(npm -v)"
