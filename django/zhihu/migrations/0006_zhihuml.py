# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2016-08-25 03:12
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('zhihu', '0005_auto_20160823_0411'),
    ]

    operations = [
        migrations.CreateModel(
            name='ZhihuML',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.CharField(max_length=120)),
                ('title', models.CharField(max_length=120)),
                ('abstract', models.CharField(default='Abstract Not Found', max_length=500)),
                ('category', models.CharField(default='', max_length=25)),
                ('img', models.CharField(default='', max_length=100)),
                ('author', models.CharField(default='', max_length=120)),
                ('bio', models.CharField(default='', max_length=120)),
            ],
        ),
    ]