from django.contrib.auth import get_user_model

User = get_user_model()

admin_email = "admin@rmf.io"
admin_pass = "password123"

if not User.objects.filter(email=admin_email).exists():
    User.objects.create_superuser(
        username="admin",
        email=admin_email,
        password=admin_pass,
        role="Admin"
    )
    print(f"✅ Admin user created: {admin_email} / {admin_pass}")
else:
    print(f"✅ Admin already exists: {admin_email}")
