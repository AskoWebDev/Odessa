from django.shortcuts import render

from .serializers import CitySerializer
from .models import City
from rest_framework import generics

class CityCreateList(generics.ListCreateAPIView):
	queryset = City.objects.all()
	serializer_class = CitySerializer

class CityList(generics.ListAPIView):
	queryset = City.objects.all()
	serializer_class = CitySerializer