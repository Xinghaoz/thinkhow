from django.shortcuts import render
from contact.forms import SignUpForm
from zhihu.models import Article, ZhihuML
from bilibili.models import Bangumi, Game
from update.models import ZhihuTime, ZhihuMLTime, BangumiTime, GameTime

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
    zhihu_ml = ZhihuML.objects.all()
    bangumi = Bangumi.objects.all()
    game = Game.objects.all()

    # zhihu_time = ZhihuTime.objects.last()
    # zhihu_ml_time = ZhihuMLTime.objects.last()
    # bangumi_time = BangumiTime.objects.last()
    # game_time = GameTime.objects.last()
    zhihu_time = Article.objects.last()
    zhihu_ml_time = ZhihuML.objects.last()
    bangumi_time = Bangumi.objects.last()
    game_time = Game.objects.last()

    context = {
        'zhihu': zhihu,
        'zhihu_ml': zhihu_ml,
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
