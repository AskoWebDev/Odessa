from django.urls import path
from .views import index

urlpatterns = [
	path('', index),
	path('home', index),
	path('street', index),
	path('history', index),
	path('share', index),
	path('register', index),
	path('enter', index),
	path('photo', index),
]