from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Comment(models.Model):
    email = models.EmailField(blank=False)
    full_name = models.CharField(max_length=120, blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True, auto_now=False)
    message = models.CharField(max_length=1000, blank=True)

    def __unicode__(self):
       return self.email
