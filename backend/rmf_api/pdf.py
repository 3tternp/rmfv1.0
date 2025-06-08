from django.template.loader import render_to_string
from weasyprint import HTML
from django.http import HttpResponse
from .models import Risk

def generate_risk_report():
    risks = Risk.objects.all()
    html_string = render_to_string("risk_report.html", {'risks': risks})
    html = HTML(string=html_string)
    pdf = html.write_pdf()

    response = HttpResponse(pdf, content_type='application/pdf')
    response['Content-Disposition'] = 'inline; filename="risk_report.pdf"'
    return response
