# Generated by Django 4.1.1 on 2022-10-15 14:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0008_alter_main_text'),
    ]

    operations = [
        migrations.AlterField(
            model_name='main',
            name='text',
            field=models.TextField(),
        ),
    ]