import http
from django.shortcuts import render
from rest_framework import generics
from .models import Gun
from .serializers import GunSerializer

# Create your views here.


class GunView(generics.CreateAPIView):
    queryset = Gun.objects.all()
    serializer_class = GunSerializer
