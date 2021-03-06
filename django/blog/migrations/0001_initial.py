# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2017-01-02 06:59
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment_id', models.BigIntegerField()),
                ('comment', models.CharField(max_length=77)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('from_epoch', models.BigIntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Follow',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.CharField(max_length=42)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('from_epoch', models.BigIntegerField(default=0)),
                ('likes', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bio', models.CharField(blank=True, max_length=420)),
                ('age', models.IntegerField(blank=True, default=0)),
                ('photo', models.ImageField(blank=True, upload_to='/Users/Signal/github/thinkhow/django/media/photo')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='post',
            name='profile',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='blog.Profile'),
        ),
        migrations.AddField(
            model_name='follow',
            name='followee',
            field=models.ForeignKey(blank=True, default='', on_delete=django.db.models.deletion.CASCADE, related_name='followee', to='blog.Profile'),
        ),
        migrations.AddField(
            model_name='follow',
            name='follower',
            field=models.ForeignKey(blank=True, default='', on_delete=django.db.models.deletion.CASCADE, related_name='follower', to='blog.Profile'),
        ),
        migrations.AddField(
            model_name='comment',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='blog.Profile'),
        ),
        migrations.AlterUniqueTogether(
            name='follow',
            unique_together=set([('follower', 'followee')]),
        ),
    ]
