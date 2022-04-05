import http
from django.shortcuts import render
from rest_framework import generics
from .models import Gun, Crime
from .serializers import GunSerializer, CrimeSerializer

# Create your views here.


class GunCreateView(generics.CreateAPIView):
    queryset = Gun.objects.all()
    serializer_class = GunSerializer

class CrimeCreateView(generics.CreateAPIView):
    queryset = Crime.objects.all()
    serializer_class = CrimeSerializer

class GunDeleteView(generics.DestroyAPIView):
    queryset = Gun.objects.all()
    serializer_class = GunSerializer

class GunListView(generics.ListAPIView):
    queryset = Gun.objects.all()
    serializer_class = GunSerializer