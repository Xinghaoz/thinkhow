from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Bangumi(models.Model):
    title = models.CharField(max_length=50)
    url = models.CharField(max_length=120)
    category = models.CharField(max_length=25, default='')
    img = models.CharField(max_length=100, default='')
    update_time = models.CharField(max_length=50, default='')

class Game(models.Model):
    title = models.CharField(max_length=50)
    url = models.CharField(max_length=120)
    up = models.CharField(max_length=25, default='')
    img = models.CharField(max_length=100, default='')
    update_time = models.CharField(max_length=50, default='')

class Article(models.Model):
    url = models.CharField(max_length=120)
    title = models.CharField(max_length=120)
    abstract = models.CharField(max_length=500, default='Abstract Not Found')
    category = models.CharField(max_length=25, default='')
    img = models.CharField(max_length=100, default='')
    author = models.CharField(max_length=120, default='')
    bio = models.CharField(max_length=120, default='')
    update_time = models.CharField(max_length=50, default='')

class ZhihuML(models.Model):
    url = models.CharField(max_length=120)
    title = models.CharField(max_length=120)
    abstract = models.CharField(max_length=500, default='Abstract Not Found')
    category = models.CharField(max_length=25, default='')
    img = models.CharField(max_length=100, default='')
    author = models.CharField(max_length=120, default='')
    bio = models.CharField(max_length=120, default='')
    update_time = models.CharField(max_length=50, default='')

class ZhihuCV(models.Model):
    url = models.CharField(max_length=120)
    title = models.CharField(max_length=120)
    abstract = models.CharField(max_length=500, default='Abstract Not Found')
    category = models.CharField(max_length=25, default='')
    img = models.CharField(max_length=100, default='')
    author = models.CharField(max_length=120, default='')
    bio = models.CharField(max_length=120, default='')
    update_time = models.CharField(max_length=50, default='')

class ZhihuMath(models.Model):
    url = models.CharField(max_length=120)
    title = models.CharField(max_length=120)
    abstract = models.CharField(max_length=500, default='Abstract Not Found')
    category = models.CharField(max_length=25, default='')
    img = models.CharField(max_length=100, default='')
    author = models.CharField(max_length=120, default='')
    bio = models.CharField(max_length=120, default='')
    update_time = models.CharField(max_length=50, default='')

class ZhihuStat(models.Model):
    url = models.CharField(max_length=120)
    title = models.CharField(max_length=120)
    abstract = models.CharField(max_length=500, default='Abstract Not Found')
    category = models.CharField(max_length=25, default='')
    img = models.CharField(max_length=100, default='')
    author = models.CharField(max_length=120, default='')
    bio = models.CharField(max_length=120, default='')
    update_time = models.CharField(max_length=50, default='')
