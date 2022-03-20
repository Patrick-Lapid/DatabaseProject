from django.db import models

# Create your models here.


class Gun(models.Model):
    gunID = models.IntegerField()
    crimeID = models.IntegerField()
    stolen = models.BooleanField()
