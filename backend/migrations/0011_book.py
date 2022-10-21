# Generated by Django 4.1.1 on 2022-10-16 13:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0010_home_header_text'),
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('text', models.TextField(max_length=100)),
            ],
        ),
    ]
