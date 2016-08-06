from django.shortcuts import render
from contact.forms import SignUpForm
from zhihu.models import Article

# Create your views here.
def home(request):

    if request.method == "POST":
        print request.POST

    title = 'Welcome'

    form = SignUpForm(request.POST or None)

    context = {
        "title": title,
        "form": form,
    }

    if form.is_valid():
        form.save()
        context = {
            "title": 'Thank you',
        }

    queryset = Article.objects.all()
    context = {
        'queryset': queryset
    }
    return render(request, "home.html", context)

def about(request):
    return render(request, "about.html", {})

def profile(request):
    return render(request, "home.html", {})
