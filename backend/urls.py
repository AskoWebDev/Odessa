from django.urls import path

from .views import HomeDeleteSerializer, MainCreateList, CityCreateList, CityList, ShareCreate, ShareList, HomeCreateList

from .views import MyTokenObtainPairView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


urlpatterns = [
	path('main/', MainCreateList.as_view()),
	path('list/', CityList.as_view()),
	path('add/', CityCreateList.as_view()),
	path('share/list/', ShareList.as_view()),
	path('share/add/', ShareCreate.as_view()),
	path('home/add/', HomeCreateList.as_view()),
	path('home/delete/<int:pk>/', HomeDeleteSerializer.as_view()),
	path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]