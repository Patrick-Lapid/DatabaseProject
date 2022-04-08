from django.urls import path, include
from .views import *

urlpatterns = [
    path('query1/<int:num1>/<int:num2>/<int:num3>/<int:num4>/<int:num5>/<int:num6>/<int:month1>/<int:year1>/<int:month2>/<int:year2>/', query1),
    path('query2/<int:year1>/<int:year2>/<str:gender>/', query2),
    # path('crime/', CrimeListView.as_view()),
    # path('person/', PersonListView.as_view()),
    # path('state/', StateListView.as_view()),
]
