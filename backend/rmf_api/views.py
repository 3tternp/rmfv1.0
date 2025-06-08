from rest_framework import generics
from .models import Risk
from .serializers import RiskSerializer
from rest_framework.permissions import IsAuthenticated

class RiskListCreateView(generics.ListCreateAPIView):
    queryset = Risk.objects.all()
    serializer_class = RiskSerializer
    permission_classes = [IsAuthenticated]

class RiskDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Risk.objects.all()
    serializer_class = RiskSerializer
    permission_classes = [IsAuthenticated]
