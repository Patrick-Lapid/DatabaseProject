from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('data-exploration', index),
    path('resources', index)
]
