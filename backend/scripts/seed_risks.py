from rmf_api.models import Risk

sample_risks = [
    {"name": "Unpatched OS", "likelihood": 4, "impact": 5, "status": "Open"},
    {"name": "No MFA", "likelihood": 3, "impact": 4, "status": "Open"},
    {"name": "Vendor breach", "likelihood": 2, "impact": 5, "status": "Monitored"},
]

for risk in sample_risks:
    Risk.objects.get_or_create(**risk)

print("✅ Sample risks added.")
