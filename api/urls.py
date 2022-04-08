from django.urls import path, include
from .views import *

urlpatterns = [
    path('query1/<int:num1>/<int:num2>/<int:num3>/<int:num4>/<int:num5>/<int:num6>/<int:month1>/<int:year1>/<int:month2>/<int:year2>/', query1),
    path('query2/<int:year1>/', query2),
    path('query3/<int:year1>/<int:year2>/<str:gender>/', query3),
    #path('query4/<str/', query4),
    path('query5/<int:year1>/<int:year2>/', query5),
    path('query6/<int:num1>/<int:num2>/<str:ptype>/<int:month1>/<int:year1>/<int:month2>/<int:year2>/', query6),
    # path('crime/', CrimeListView.as_view()),
    # path('person/', PersonListView.as_view()),
    # path('state/', StateListView.as_view()),
]
