from django.shortcuts import render
from contact.forms import SignUpForm
from zhihu.models import Article
from bilibili.models import Bangumi, Game

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

    zhihu = Article.objects.all()
    bangumi = Bangumi.objects.all()
    game = Game.objects.all()
    context = {
        'zhihu': zhihu,
        'bangumi': bangumi,
        'game': game,
    }
    return render(request, "home.html", context)

def profile(request):
    return render(request, "home.html", {})

def refresh_bangumi(request):
    return render(request, "load_bangumi.py", {});
