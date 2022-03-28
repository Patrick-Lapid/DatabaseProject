from rest_framework import serializers
from .models import Gun, Crime

class GunSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gun
        fields = ('id', 'gunID', 'crimeID', 'stolen')

class CrimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crime
        fields = ('crimeID', 'date', 'state', 'address', 'sourceURL', 'latitude', 'longitude')
