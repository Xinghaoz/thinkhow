from django.contrib import admin
from .models import Bangumi, Game

# Register your models here.
class BangumiAdmin(admin.ModelAdmin):
    list_display = ('title', 'url', 'category', 'img')

admin.site.register(Bangumi, BangumiAdmin)

class GameAdmin(admin.ModelAdmin):
    list_display = ('title', 'up', 'url', 'img')

admin.site.register(Game, GameAdmin)
