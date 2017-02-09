from django.shortcuts import render
from contact.forms import SignUpForm
from zhihu.models import Article, ZhihuML, ZhihuCV, ZhihuMath, ZhihuStat
from bilibili.models import Bangumi, Game

# Create your views here.
def home(request):

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
    zhihu_ml = ZhihuML.objects.all()
    zhihu_cv = ZhihuCV.objects.all()
    zhihu_math = ZhihuMath.objects.all()
    zhihu_stat = ZhihuStat.objects.all()
    bangumi = Bangumi.objects.all()
    game = Game.objects.all()

    ''' Changed update_time into each model instead of being a single model '''

    zhihu_time = Article.objects.last()
    zhihu_ml_time = ZhihuML.objects.last()
    bangumi_time = Bangumi.objects.last()
    game_time = Game.objects.last()

    context = {
        'zhihu': zhihu,
        'zhihu_ml': zhihu_ml,
        'zhihu_cv': zhihu_cv,
        'zhihu_math': zhihu_math,
        'zhihu_stat': zhihu_stat,
        'bangumi': bangumi,
        'game': game,
        'zhihu_time': zhihu_time,
        'zhihu_ml_time': zhihu_ml_time,
        'bangumi_time': bangumi_time,
        'game_time': game_time,
    }
    return render(request, "home.html", context)

def profile(request):
    return render(request, "home.html", {})

def todo(request):
    return render(request, "todo.html", {})
