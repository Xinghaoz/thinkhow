# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2016-08-19 03:01
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Bangumi',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('url', models.CharField(max_length=120)),
                ('category', models.CharField(default='', max_length=25)),
            ],
        ),
    ]
