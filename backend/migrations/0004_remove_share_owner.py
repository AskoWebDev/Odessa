# Generated by Django 4.1.1 on 2022-09-19 11:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0003_share_owner'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='share',
            name='owner',
        ),
    ]