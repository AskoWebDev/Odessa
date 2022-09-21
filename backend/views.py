from django.shortcuts import render

from .serializers import CitySerializer, ShareSerializer
from .models import City, Share
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated

class CityCreateList(generics.ListCreateAPIView):
	queryset = City.objects.all()
	serializer_class = CitySerializer
	

class CityList(generics.ListAPIView):
	queryset = City.objects.all()
	serializer_class = CitySerializer
	permission_classes = [IsAuthenticated]
	
class ShareCreate(generics.ListCreateAPIView):
	queryset = Share.objects.all()
	serializer_class = ShareSerializer

# @api_view(['POST'])
# def ShareCreate(request):
# 	serializer = ShareSerializer(data=request.data)
# 	if serializer.is_valid():
# 		serializer.save()
# 		return Response(serializer.data, status=status.HTTP_201_CREATED)
# 	return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ShareList(generics.ListAPIView):
	queryset = Share.objects.all()
	serializer_class = ShareSerializer
	
class DeleteShare(generics.RetrieveUpdateDestroyAPIView):
	queryset = Share.objects.all()
	serializer_class = ShareSerializer