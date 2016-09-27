from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Post(models.Model):
    username = models.CharField(max_length=25)
    text = models.CharField(max_length=42)
    timestamp = models.DateTimeField(auto_now_add=True, auto_now=False)
    likes = models.IntegerField(default=0)

    def __str__(self):
        return str(self.timestamp)
