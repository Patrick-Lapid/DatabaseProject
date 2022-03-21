from django.db import models
from django.core.validators import *;

# Create your models here.

class Gun(models.Model):
    gunID = models.IntegerField(primary_key=True)
    crime = models.ForeignKey('Crime', on_delete=models.CASCADE)
    stolen = models.BooleanField(default=False)

class Crime(models.Model):

    #not auto since crimeID = incident id in og database
    crimeID = models.IntegerField(primary_key=True)
    date = models.DateField()
    state = models.ForeignKey('State', on_delete=models.CASCADE)
    address = models.CharField(max_length=225)
    sourceURL = models.URLField(max_length=255, default="")
    latitude = models.DecimalField(decimal_places=7, max_digits=10)
    longitude = models.DecimalField(decimal_places=7, max_digits=10)
    notes = models.CharField(max_length=1000, default="")

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
    STATUS_CHOICES = [('Arrested', 'Arrested'), ('Killed', 'Killed'), ('Injured', 'Injured'), ('Unharmed', 'Unharmed'), ('Unknown', 'Unknown')]
    TYPE_CHOICES = [('Subject-Suspect', 'Subject-Suspect'), ('Victim', 'Victim'), ('Unknown', 'Unknown')]

    personID = models.IntegerField(primary_key=True)
    inCrime = models.ForeignKey(Crime, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, default="")
    age = models.PositiveIntegerField(blank=True, validators=[MaxValueValidator(110)])
    gender = models.CharField(max_length=10, default='U', choices=GENDER_CHOICES)
    status = models.CharField(max_length=10, default='Unknown', choices=STATUS_CHOICES)
    personType = models.CharField(max_length=15, default='Unknown', choices=TYPE_CHOICES)
