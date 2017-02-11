from django.shortcuts import render
from reportlab.pdfgen import canvas
from django.http import HttpResponse
from django.conf import settings

# Create your views here.
def about(request):
    return render(request, 'about/about.html', {})

def resume(request):
    return render(request, 'about/resume.html', {})

def skills(request):
    return render(request, 'about/skills.html', {})

def about_website(request):
    return render(request, 'about/about_website.html', {})

def get_resume(request):
    with open(settings.BASE_DIR + '/static_in_pro/' + 'Resume_Xinghao Zhou.pdf', 'r') as pdf:
        response = HttpResponse(pdf.read(), content_type='application/pdf')
        response['Content-Disposition'] = 'inline;filename=Resume_Xinghao Zhou.pdf'
        return response
    pdf.closed

    """
    # Create the HttpResponse object with the appropriate PDF headers.
    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = 'attachment; filename="Resume_Xinghao Zhou.pdf"'

    # Create the PDF object, using the response object as its "file."
    p = canvas.Canvas(response)

    # Draw things on the PDF. Here's where the PDF generation happens.
    # See the ReportLab documentation for the full list of functionality.
    # p.drawString(100, 100, "Hello world.")

    # Close the PDF object cleanly, and we're done.
    p.showPage()
    p.save()
    return response
    """
