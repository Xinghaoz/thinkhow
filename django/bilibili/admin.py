from django.contrib import admin
from .models import Bangumi

# Register your models here.
class BangumiAdmin(admin.ModelAdmin):
    list_display = ('title', 'url', 'category', 'img')

admin.site.register(Bangumi, BangumiAdmin)
