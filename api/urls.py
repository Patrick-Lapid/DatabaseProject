from django.urls import path, include
from .views import GunView

urlpatterns = [
    path('', GunView.as_view()),
]
