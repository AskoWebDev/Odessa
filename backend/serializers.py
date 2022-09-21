from rest_framework import serializers
from .models import City, Share

class CitySerializer(serializers.ModelSerializer):
	class Meta:
		model = City
		fields = ['id', 'name', 'age', 'country', 'street']

class ShareSerializer(serializers.ModelSerializer):
	class Meta:
		model = Share
		fields = ['text']