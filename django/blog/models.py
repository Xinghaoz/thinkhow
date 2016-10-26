from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
import os
from . import *
from django.db.models.fields.files import ImageFieldFile, FileField

# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User)
    # user = models.ForeignKey(User)
    bio = models.CharField(max_length=420, blank=True)
    age = models.IntegerField(blank=True, default=0)
    photo = models.ImageField(upload_to=os.path.join(settings.MEDIA_ROOT, 'photo'),
                              blank=True,)

    def __str__(self):
        return str(self.user.username)

    def get_photo(self):
        if self.photo:
            return self.photo
        return ImageFieldFile(instance=None, field=FileField(),
                              name='photo/g.jpg')



class Post(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    text = models.CharField(max_length=42)
    timestamp = models.DateTimeField(auto_now_add=True, auto_now=False)
    from_epoch = models.BigIntegerField(default=0)
    likes = models.IntegerField(default=0)

    def __str__(self):
        return str(self.timestamp)

class Follow(models.Model):
    class Meta:
        unique_together = ('follower', 'followee')
    follower = models.ForeignKey(Profile, related_name='follower', blank=True, default="")
    followee = models.ForeignKey(Profile, related_name='followee', blank=True, default="") # Followee

class Comment(models.Model):
    comment_id = models.BigIntegerField();
    author = models.ForeignKey(Profile, on_delete=models.CASCADE)
    comment = models.CharField(max_length=77)
    timestamp = models.DateTimeField(auto_now_add=True)
    from_epoch = models.BigIntegerField(default=0)
