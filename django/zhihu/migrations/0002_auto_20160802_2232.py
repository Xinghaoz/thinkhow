# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2016-08-02 22:32
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('zhihu', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='abstract',
            field=models.CharField(default='Abstract Not Found', max_length=500),
        ),
        migrations.AddField(
            model_name='article',
            name='category',
            field=models.CharField(default='', max_length=25),
        ),
    ]