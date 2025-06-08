from django.db import models

class Risk(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    likelihood = models.IntegerField()
    impact = models.IntegerField()
    status = models.CharField(max_length=50, choices=[('Open', 'Open'), ('Mitigated', 'Mitigated')])
    owner = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def risk_score(self):
        return self.likelihood * self.impact

    def __str__(self):
        return self.name
