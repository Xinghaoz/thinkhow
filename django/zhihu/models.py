from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Article(models.Model):
    url = models.CharField(max_length=120)
    title = models.CharField(max_length=120)
    abstract = models.CharField(max_length=500, default='Abstract Not Found')
    category = models.CharField(max_length=25, default='')
    img = models.CharField(max_length=100, default='')
    author = models.CharField(max_length=120, default='')
    bio = models.CharField(max_length=120, default='')

class ZhihuML(models.Model):
    url = models.CharField(max_length=120)
    title = models.CharField(max_length=120)
    abstract = models.CharField(max_length=500, default='Abstract Not Found')
    category = models.CharField(max_length=25, default='')
    img = models.CharField(max_length=100, default='')
    author = models.CharField(max_length=120, default='')
    bio = models.CharField(max_length=120, default='')
