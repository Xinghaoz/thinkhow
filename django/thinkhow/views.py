from django.shortcuts import render
from contact.forms import SignUpForm
from zhihu.models import Article, ZhihuML, ZhihuCV, ZhihuMath, ZhihuStat
from bilibili.models import Bangumi, Game

# Create your views here.
def home(request):
    return render(request, 'about/about.html', {})

def profile(request):
    return render(request, "home.html", {})

def todo(request):
    return render(request, "todo.html", {})
