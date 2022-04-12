from rest_framework import serializers
from .models import *

class Query1Serializer(serializers.Serializer):
   age1 = serializers.IntegerField()
   age2 = serializers.IntegerField()
   killed = serializers.FloatField()
   injured = serializers.FloatField()
   unharmed = serializers.FloatField()
   arrested = serializers.FloatField()

class Query2Serializer(serializers.Serializer):
   state = serializers.CharField()
   numIncidents = serializers.IntegerField()
   medianIncome = serializers.IntegerField()

class Query3Serializer(serializers.Serializer):
   shooterGender = serializers.CharField()
   maleVictimsRatio = serializers.FloatField()
   femaleVictimsRatio = serializers.FloatField()
   unknownVictimsRatio = serializers.FloatField()


class Query4Serializer(serializers.Serializer):
   state = serializers.CharField()
   stolen = serializers.FloatField()
   notstolen = serializers.FloatField()
   unknown = serializers.FloatField()
   year = serializers.IntegerField()

class Query5Serializer(serializers.Serializer):
   state = serializers.CharField()
   percentage = serializers.FloatField()

class Query6Serializer(serializers.Serializer):
   age1 = serializers.IntegerField()
   age2 = serializers.IntegerField()
   count = serializers.IntegerField()

class Query7Serializer(serializers.Serializer):
   totalGuns = serializers.IntegerField()
   totalCrimes = serializers.IntegerField()
   totalPeople = serializers.IntegerField()
   totalStates = serializers.IntegerField()

# class GunSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Gun
#         fields = ('gunID', 'crime', 'stolen')
#
# class CrimeSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Crime
#         fields = ('crimeID', 'date', 'state', 'address', 'sourceURL', 'latitude', 'longitude')
#
# class PersonSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = person
#         fields = ('pID', 'inCrime', 'name', 'age', 'gender', 'isArrested', 'isInjured', 'isKilled', 'isUnharmed', 'personType')
#
# class StateSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = State
#         fields = ('stateName', 'year2013', 'year2014', 'year2015', 'year2016', 'year2017', 'year2018')
#
#
