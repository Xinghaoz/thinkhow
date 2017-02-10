from django.contrib import admin
from .models import *

# Register your models here.
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'url', 'abstract', 'category', 'img', 'author', 'bio', 'update_time')

admin.site.register(Article, ArticleAdmin)

class ZhihuTopicAdmin(admin.ModelAdmin):
    list_display = ('title', 'url', 'abstract', 'category', 'img', 'author', 'bio', 'update_time')

class BangumiAdmin(admin.ModelAdmin):
    list_display = ('title', 'url', 'category', 'img', 'update_time')

class GameAdmin(admin.ModelAdmin):
    list_display = ('title', 'up', 'url', 'img', 'update_time')

admin.site.register(Bangumi, BangumiAdmin)
admin.site.register(Game, GameAdmin)
admin.site.register(ZhihuML, ZhihuTopicAdmin)
admin.site.register(ZhihuCV, ZhihuTopicAdmin)
admin.site.register(ZhihuMath, ZhihuTopicAdmin)
admin.site.register(ZhihuStat, ZhihuTopicAdmin)
