from django.urls import path, include
from .views import *

urlpatterns = [
    path('', GunCreateView.as_view()),
    path('crime/', CrimeCreateView.as_view()),
    path('list/', GunListView.as_view()),
    path('delete/<int:pk>/', GunDeleteView.as_view()),
]
