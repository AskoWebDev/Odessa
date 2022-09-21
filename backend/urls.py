from django.urls import path

from .views import CityCreateList, CityList, ShareCreate, ShareList, DeleteShare

urlpatterns = [
	path('list/', CityList.as_view()),
	path('add/', CityCreateList.as_view()),
	path('share/list/', ShareList.as_view()),
	path('share/del/<int:pk>/', DeleteShare.as_view()),
	path('share/add/', ShareCreate.as_view())
]