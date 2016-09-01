from django.contrib import admin
from .models import Article, ZhihuML, ZhihuCV, ZhihuMath, ZhihuStat

# Register your models here.
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'url', 'abstract', 'category', 'img', 'author', 'bio', 'update_time')

admin.site.register(Article, ArticleAdmin)

class ZhihuTopicAdmin(admin.ModelAdmin):
    list_display = ('title', 'url', 'abstract', 'category', 'img', 'author', 'bio', 'update_time')

admin.site.register(ZhihuML, ZhihuTopicAdmin)
admin.site.register(ZhihuCV, ZhihuTopicAdmin)
admin.site.register(ZhihuMath, ZhihuTopicAdmin)
admin.site.register(ZhihuStat, ZhihuTopicAdmin)
