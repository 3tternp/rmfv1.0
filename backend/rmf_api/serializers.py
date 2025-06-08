from rest_framework import serializers
from .models import Risk

class RiskSerializer(serializers.ModelSerializer):
    risk_score = serializers.ReadOnlyField()

    class Meta:
        model = Risk
        fields = ['id', 'name', 'description', 'likelihood', 'impact', 'status', 'owner', 'created_at', 'risk_score']
