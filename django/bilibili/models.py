from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Bangumi(models.Model):
    title = models.CharField(max_length=50)
    url = models.CharField(max_length=120)
    category = models.CharField(max_length=25, default='')
    img = models.CharField(max_length=100, default='')
