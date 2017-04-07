# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-04-07 16:57
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userevents', '0002_auto_20170407_0955'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userevent',
            name='seen_at',
        ),
        migrations.AlterField(
            model_name='userevent',
            name='seen_date',
            field=models.DateField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='userevent',
            name='seen_time',
            field=models.TimeField(auto_now_add=True),
        ),
    ]
