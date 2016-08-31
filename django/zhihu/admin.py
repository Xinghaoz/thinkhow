from django.contrib import admin
from .models import Article, ZhihuML

# Register your models here.
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'url', 'abstract', 'category', 'img', 'author', 'bio', 'update_time')

admin.site.register(Article, ArticleAdmin)

class ZhihuMLAdmin(admin.ModelAdmin):
    list_display = ('title', 'url', 'abstract', 'category', 'img', 'author', 'bio', 'update_time')

admin.site.register(ZhihuML, ZhihuMLAdmin)
