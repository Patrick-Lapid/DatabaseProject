import http
from django.shortcuts import render
from rest_framework import generics
from .models import Gun
from .serializers import GunSerializer

# Create your views here.


class GunCreateView(generics.CreateAPIView):
    queryset = Gun.objects.all()
    serializer_class = GunSerializer

class GunDeleteView(generics.DestroyAPIView):
    queryset = Gun.objects.all()
    serializer_class = GunSerializer

class GunListView(generics.ListAPIView):
    queryset = Gun.objects.all()
    serializer_class = GunSerializer