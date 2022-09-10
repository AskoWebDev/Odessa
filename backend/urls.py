from django.urls import path

from .views import CityCreateList, CityList

urlpatterns = [
	path('list/', CityList.as_view()),
	path('add/', CityCreateList.as_view())
]