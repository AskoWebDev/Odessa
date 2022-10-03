from rest_framework import serializers
from .models import City, Share, Home
from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model

User = get_user_model()

class CitySerializer(serializers.ModelSerializer):
	class Meta:
		model = City
		fields = "__all__"

class ShareSerializer(serializers.ModelSerializer):
	class Meta:
		model = Share
		fields = ['id', 'text']

class UserCreateSerializer(UserCreateSerializer):
	class Meta(UserCreateSerializer.Meta):
		model = User
		fields = ('id', 'email', 'username', 'password')

class HomeSerializer(serializers.ModelSerializer):
	class Meta:
		model = Home
		fields = "__all__"
