from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=120)
    url = models.CharField(max_length=120)
    abstract = models.CharField(max_length=500, default='Abstract Not Found')
    category = models.CharField(max_length=25, default='')
