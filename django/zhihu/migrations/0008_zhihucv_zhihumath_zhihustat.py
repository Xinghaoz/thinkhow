# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2016-09-01 00:21
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('zhihu', '0007_auto_20160831_0153'),
    ]

    operations = [
        migrations.CreateModel(
            name='ZhihuCV',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.CharField(max_length=120)),
                ('title', models.CharField(max_length=120)),
                ('abstract', models.CharField(default='Abstract Not Found', max_length=500)),
                ('category', models.CharField(default='', max_length=25)),
                ('img', models.CharField(default='', max_length=100)),
                ('author', models.CharField(default='', max_length=120)),
                ('bio', models.CharField(default='', max_length=120)),
                ('update_time', models.CharField(default='', max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='ZhihuMath',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.CharField(max_length=120)),
                ('title', models.CharField(max_length=120)),
                ('abstract', models.CharField(default='Abstract Not Found', max_length=500)),
                ('category', models.CharField(default='', max_length=25)),
                ('img', models.CharField(default='', max_length=100)),
                ('author', models.CharField(default='', max_length=120)),
                ('bio', models.CharField(default='', max_length=120)),
                ('update_time', models.CharField(default='', max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='ZhihuStat',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.CharField(max_length=120)),
                ('title', models.CharField(max_length=120)),
                ('abstract', models.CharField(default='Abstract Not Found', max_length=500)),
                ('category', models.CharField(default='', max_length=25)),
                ('img', models.CharField(default='', max_length=100)),
                ('author', models.CharField(default='', max_length=120)),
                ('bio', models.CharField(default='', max_length=120)),
                ('update_time', models.CharField(default='', max_length=50)),
            ],
        ),
    ]
