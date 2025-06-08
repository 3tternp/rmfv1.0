from django.core.management.base import BaseCommand
from django.contrib.auth.models import User

class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        if not User.objects.filter(username="admin").exists():
            User.objects.create_superuser("admin", "admin@rmf.io", "password123")
            self.stdout.write("Admin user created.")
        else:
            self.stdout.write("Admin already exists.")
