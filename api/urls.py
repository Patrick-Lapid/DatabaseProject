from django.urls import path, include
from .views import GunListView

urlpatterns = [
    path('gun/', GunListView.as_view()),
    # path('crime/', CrimeListView.as_view()),
    # path('person/', PersonListView.as_view()),
    # path('state/', StateListView.as_view()),
]
