from django.shortcuts import render

from .serializers import CitySerializer, ShareSerializer, HomeSerializer
from .models import City, Share, Home
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class CityCreateList(generics.ListCreateAPIView):
	queryset = City.objects.all()
	serializer_class = CitySerializer
	

class CityList(generics.ListAPIView):
	queryset = City.objects.all()
	serializer_class = CitySerializer
	

class ShareCreate(generics.ListCreateAPIView):
	queryset = Share.objects.all()
	serializer_class = ShareSerializer
	

class ShareList(generics.ListAPIView):
	queryset = Share.objects.all()
	serializer_class = ShareSerializer
	
	
class DeleteShare(generics.RetrieveUpdateDestroyAPIView):
	queryset = Share.objects.all()
	serializer_class = ShareSerializer

class HomeCreateList(generics.ListCreateAPIView):
	queryset = Home.objects.all()
	serializer_class = HomeSerializer
	
