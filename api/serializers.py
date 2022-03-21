from rest_framework import serializers
from .models import Gun

class GunSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gun
        fields = ('id', 'gunID', 'crimeID', 'stolen')
