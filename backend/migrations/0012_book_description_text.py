# Generated by Django 4.1.1 on 2022-10-16 13:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0011_book'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='description_text',
            field=models.TextField(blank=True, max_length=100, null=True),
        ),
    ]