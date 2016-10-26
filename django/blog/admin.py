from django.contrib import admin
from .models import *

# Register your models here.
class PostAdmin(admin.ModelAdmin):
    list_display = ('profile', 'text', 'likes', 'timestamp', 'from_epoch')

admin.site.register(Post, PostAdmin)

class ProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'photo', 'bio')

admin.site.register(Profile, ProfileAdmin)

class FollowAdmin(admin.ModelAdmin):
    list_display = ('follower', 'followee')

admin.site.register(Follow, FollowAdmin)

class CommentAdmin(admin.ModelAdmin):
    # list_display = ('comment_id', 'author', 'comment')
    list_display = ('comment_id', 'author', 'comment', 'timestamp')

admin.site.register(Comment, CommentAdmin)
