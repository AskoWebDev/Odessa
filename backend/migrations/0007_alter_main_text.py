# Generated by Django 4.1.1 on 2022-10-15 14:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0006_main'),
    ]

    operations = [
        migrations.AlterField(
            model_name='main',
            name='text',
            field=models.CharField(max_length=300),
        ),
    ]