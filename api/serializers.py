from rest_framework import serializers
from .models import *

class GunSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gun
        fields = ('gunID', 'crime', 'stolen')

class CrimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crime
        fields = ('crimeID', 'date', 'state', 'address', 'sourceURL', 'latitude', 'longitude')

class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = person
        fields = ('pID', 'inCrime', 'name', 'age', 'gender', 'isArrested', 'isInjured', 'isKilled', 'isUnharmed', 'personType')

class StateSerializer(serializers.ModelSerializer):
    class Meta:
        model = State
        fields = ('stateName', 'year2013', 'year2014', 'year2015', 'year2016', 'year2017', 'year2018')