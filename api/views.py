from rest_framework import generics
from .models import *
from .serializers import *

# Create your views here.

class GunListView(generics.ListAPIView):
    queryset = Gun.objects.raw('SELECT * FROM api_gun FETCH NEXT 5 ROWS ONLY')
    serializer_class = GunSerializer

class CrimeListView(generics.ListAPIView):
    queryset = Crime.objects.all()
    serializer_class = CrimeSerializer

class PersonListView(generics.ListAPIView):
    queryset = person.objects.all()
    serializer_class = PersonSerializer

class StateListView(generics.ListAPIView):
    queryset = State.objects.all()
    serializer_class = StateSerializer