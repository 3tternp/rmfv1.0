from django.core.management.base import BaseCommand
from django.contrib.auth.models import User, Group

class Command(BaseCommand):
    help = 'Create a user with a specific role'

    def add_arguments(self, parser):
        parser.add_argument('email', type=str, help='User email')
        parser.add_argument('password', type=str, help='Password')
        parser.add_argument('role', type=str, help='Role (Risk Officer or Auditor)')

    def handle(self, *args, **options):
        email = options['email']
        password = options['password']
        role = options['role']

        if role not in ['Risk Officer', 'Auditor']:
            self.stdout.write(self.style.ERROR("Role must be 'Risk Officer' or 'Auditor'"))
            return

        if User.objects.filter(username=email).exists():
            self.stdout.write(self.style.WARNING(f"User {email} already exists."))
            return

        user = User.objects.create_user(username=email, email=email, password=password)
        group = Group.objects.get(name=role)
        user.groups.add(group)
        self.stdout.write(self.style.SUCCESS(f"✅ Created user {email} with role {role}"))
