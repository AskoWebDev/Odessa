# Generated by Django 4.1.1 on 2022-10-15 14:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0009_alter_main_text'),
    ]

    operations = [
        migrations.AddField(
            model_name='home',
            name='header_text',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
