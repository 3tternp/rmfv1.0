from rest_framework import generics
from .models import Risk
from .serializers import RiskSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from django.contrib.auth.models import User, Group

class CreateUserView(APIView):
    permission_classes = [permissions.IsAdminUser]

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        role = request.data.get('role')  # "Risk Officer" or "Auditor"

        if not email or not password or not role:
            return Response({'error': 'Missing required fields'}, status=400)

        if role not in ['Risk Officer', 'Auditor']:
            return Response({'error': 'Invalid role'}, status=400)

        if User.objects.filter(username=email).exists():
            return Response({'error': 'User already exists'}, status=409)

        user = User.objects.create_user(username=email, email=email, password=password)
        group = Group.objects.get(name=role)
        user.groups.add(group)

        return Response({'message': f'User {email} created with role {role}'}, status=201)
        
class RiskListCreateView(generics.ListCreateAPIView):
    queryset = Risk.objects.all()
    serializer_class = RiskSerializer
    permission_classes = [IsAuthenticated]

class RiskDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Risk.objects.all()
    serializer_class = RiskSerializer
    permission_classes = [IsAuthenticated]
