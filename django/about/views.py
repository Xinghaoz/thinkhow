from django.shortcuts import render

# Create your views here.
def about(request):
    return render(request, 'about/about.html', {})

def resume(request):
    return render(request, 'about/resume.html', {})

def skills(request):
    return render(request, 'about/skills.html', {})

def about_website(request):
    return render(request, 'about/about_website.html', {})
