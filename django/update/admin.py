from django.contrib import admin

from .models import BangumiTime, ZhihuTime, ZhihuMLTime, GameTime
# Register your models here.

class BangumiTimeAdmin(admin.ModelAdmin):
    list_display = ('update_time',)

admin.site.register(BangumiTime, BangumiTimeAdmin)

class ZhihuTimeAdmin(admin.ModelAdmin):
    list_display = ('update_time',)

admin.site.register(ZhihuTime, ZhihuTimeAdmin)

class ZhihuMLTimeAdmin(admin.ModelAdmin):
    list_display = ('update_time',)

admin.site.register(ZhihuMLTime, ZhihuMLTimeAdmin)

class GameTimeAdmin(admin.ModelAdmin):
    list_display = ('update_time',)

admin.site.register(GameTime, GameTimeAdmin)
