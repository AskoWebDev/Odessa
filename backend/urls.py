from django.urls import path

from .views import CityCreateList, CityList, ShareCreate, ShareList, DeleteShare, HomeCreateList

from .views import MyTokenObtainPairView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


urlpatterns = [
	path('list/', CityList.as_view()),
	path('add/', CityCreateList.as_view()),
	path('share/list/', ShareList.as_view()),
	path('share/del/<int:pk>/', DeleteShare.as_view()),
	path('share/add/', ShareCreate.as_view()),
	path('home/add/', HomeCreateList.as_view()),
	path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]