from django.db import models

class Main(models.Model):
	text = models.TextField()
	image = models.ImageField(null=True, blank=True, upload_to="images/")

class City(models.Model):
	name = models.CharField(max_length=150)
	age = models.IntegerField()
	street = models.CharField(max_length=250)
	country = models.CharField(max_length=250)
	created = models.DateTimeField(auto_now_add=True)

class Share(models.Model):
	text = models.TextField()

class Home(models.Model):
	header_text = models.CharField(null=True, blank=True, max_length=100)
	home_text = models.TextField()
	home_image = models.ImageField(null=True, blank=True, upload_to="images/")
