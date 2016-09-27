from django.contrib import admin
from .models import *

# Register your models here.
class PostAdmin(admin.ModelAdmin):
    list_display = ('username', 'text', 'likes', 'timestamp')

admin.site.register(Post, PostAdmin)
