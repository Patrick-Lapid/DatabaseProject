from django.db import models
from django.core.validators import *;

# Create your models here.

class Gun(models.Model):
    STOLEN_CHOICES = [('Unknown','Unknown'), ('Notstolen','Not-Stolen'), ('Stolen','Stolen')]
    gunID = models.IntegerField(primary_key=True)
    crime = models.ForeignKey('Crime', on_delete=models.CASCADE)
    stolen = models.CharField(max_length=10, default='Unknown', choices=STOLEN_CHOICES)

class Crime(models.Model):

    #not auto since crimeID = incident id in og database
    crimeID = models.IntegerField(primary_key=True)
    date = models.DateField(blank=True)
    state = models.ForeignKey('State', on_delete=models.CASCADE)
    address = models.CharField(max_length=225)
    sourceURL = models.URLField(max_length=255, default="")
    latitude = models.DecimalField(decimal_places=7, max_digits=12, blank=True)
    longitude = models.DecimalField(decimal_places=7, max_digits=12, blank=True)

class State(models.Model):
    stateName = models.CharField(max_length=100, primary_key=True)
    year2013 = models.PositiveIntegerField()
    year2014 = models.PositiveIntegerField()
    year2015 = models.PositiveIntegerField()
    year2016 = models.PositiveIntegerField()
    year2017 = models.PositiveIntegerField()
    year2018 = models.PositiveIntegerField()

class person(models.Model):

    GENDER_CHOICES = [('Male', 'Male'), ('Female', 'Female'), ('Unknown', 'Unknown')]
    TYPE_CHOICES = [('Subject-Suspect', 'Subject-Suspect'), ('Victim', 'Victim'), ('Unknown', 'Unknown')]

    pID = models.IntegerField(primary_key=True)
    inCrime = models.ForeignKey(Crime, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, default="")
    age = models.PositiveIntegerField(blank=True, validators=[MaxValueValidator(110)])
    gender = models.CharField(max_length=10, default='Unknown', choices=GENDER_CHOICES)
    isArrested = models.BooleanField(default=False)
    isInjured = models.BooleanField(default=False)
    isKilled = models.BooleanField(default=False)
    isUnharmed = models.BooleanField(default=False)
    personType = models.CharField(max_length=15, default='Unknown', choices=TYPE_CHOICES)
