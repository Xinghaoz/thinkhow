# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2016-08-19 03:07
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bilibili', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='bangumi',
            name='img',
            field=models.CharField(default='', max_length=100),
        ),
    ]
