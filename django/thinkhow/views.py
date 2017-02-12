from django.shortcuts import render
from contact.forms import SignUpForm

# Create your views here.
def home(request):
    return render(request, 'home.html', {})

def profile(request):
    return render(request, "home.html", {})

def todo(request):
    return render(request, "todo.html", {})
