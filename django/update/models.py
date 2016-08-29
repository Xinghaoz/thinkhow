from __future__ import unicode_literals

from django.db import models

# Create your models here.
class BangumiTime(models.Model):
    update_time = models.CharField(max_length=50)

class ZhihuTime(models.Model):
    update_time = models.CharField(max_length=50)

class ZhihuMLTime(models.Model):
    update_time = models.CharField(max_length=50)

class GameTime(models.Model):
    update_time = models.CharField(max_length=50)
