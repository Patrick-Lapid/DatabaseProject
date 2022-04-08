from rest_framework import serializers
from .models import *

class Query1Serializer(serializers.Serializer):
   age1 = serializers.IntegerField()
   age2 = serializers.IntegerField()
   killed = serializers.FloatField()
   injured = serializers.FloatField()
   unharmed = serializers.FloatField()
   arrested = serializers.FloatField()


class Query3Serializer(serializers.Serializer):
   shooterGender = serializers.CharField()
   maleVictimsRatio = serializers.FloatField()
   femaleVictimsRatio = serializers.FloatField()
   unknownVictimsRatio = serializers.FloatField()
   year = serializers.IntegerField()



# class Query2Serializer(serializers.Serializer):
#    str1 = serializers.CharField()
#    str2 = serializers.CharField()
#    year1 = serializers.IntegerField(required=False)
#    month1 = serializers.IntegerField(required=False)
#    year2 = serializers.IntegerField(required=False)
#    month2 = serializers.IntegerField(required=False)

class Query4Serializer(serializers.Serializer):
   states = serializers.ListField(min_length = 1)
   year1 = serializers.IntegerField(required=False)
   month1 = serializers.IntegerField(required=False)
   year2 = serializers.IntegerField(required=False)
   month2 = serializers.IntegerField(required=False)

class Query5Serializer(serializers.Serializer):
   year1 = serializers.IntegerField(required=False)
   month1 = serializers.IntegerField(required=False)
   year2 = serializers.IntegerField(required=False)
   month2 = serializers.IntegerField(required=False)

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
