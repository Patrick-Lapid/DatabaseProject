from django.db import models
from django.core.validators import *;

# Create your models here.
class Query1:
    def __init__(self, age1, age2, killed, injured, unharmed, arrested):
        self.age1 = age1
        self.age2 = age2
        self.killed = killed
        self.injured = injured
        self.unharmed = unharmed
        self.arrested = arrested

class Query2:
    def __init__(self, state, medianIncome, numIncidents):
        self.state = state
        self.numIncidents = numIncidents
        self.medianIncome = medianIncome

class Query3:
    def __init__(self, shooterGender, year, r1, r2, r3):
        self.shooterGender = shooterGender
        self.maleVictimsRatio = r1
        self.femaleVictimsRatio = r2
        self.unknownVictimsRatio = r3

class Query4:
    def __init__(self, state, stolen, notstolen, unknown, year):
        self.state = state
        self.stolen = stolen
        self.notstolen = notstolen
        self.unknown = unknown
        self.year = year

class Query5:
    def __init__(self, state, percentage):
        self.state = state
        self.percentage = percentage

class Query6:
    def __init__(self,age1, age2, count):
        self.age1 = age1
        self.age2 = age2
        self.count = count

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
