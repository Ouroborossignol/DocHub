# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2016-05-29 16:49
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='context',
            field=models.CharField(default='', max_length=500),
        ),
    ]
