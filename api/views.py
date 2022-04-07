from rest_framework import generics
from .models import *
from django.views.decorators.csrf import csrf_exempt
from .serializers import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponse
from django.db import connection
# Create your views here.
#To - do
#2. create api view for each query
#3. allow for get request of each query, parse the queries
#4. create queries for each serializer

@api_view(['GET'])
@csrf_exempt
def query1(request, num1, num2, num3, num4, num5, num6, year1=2013, month1=1, year2=2018, month2=12):
    if request.method == 'GET':

        arr = [num1, num2, num3, num4, num5, num6]
        people = []
        cursor = connection.cursor()
        for x in range(3):
            q = "SELECT count(case iskilled WHEN 1 then 1 else null end)/count(*) FROM API_PERSON, API_CRIME WHERE AGE > {} AND AGE != 0 AND AGE < {} AND api_person.incrime_id=api_crime.crimeID AND crimedate > date '{}-{}-1' AND crimedate < date '{}-{}-28';".format(arr[x*2], arr[x*2 + 1], year1, month1, year2, month2)
            cursor.execute(q)
            r = cursor.fetchone()
            killed = r[0]
            q = "SELECT count(case isarrested WHEN 1 then 1 else null end)/count(*) FROM API_PERSON, API_CRIME WHERE AGE > {} AND AGE != 0 AND AGE < {} AND api_person.incrime_id=api_crime.crimeID AND crimedate > date '{}-{}-1' AND crimedate < date '{}-{}-28';".format(arr[x * 2], arr[x * 2 + 1], year1, month1, year2, month2)
            cursor.execute(q)
            r = cursor.fetchone()
            arrested = r[0]
            q = "SELECT count(case isinjured WHEN 1 then 1 else null end)/count(*) FROM API_PERSON, API_CRIME WHERE AGE > {} AND AGE != 0 AND AGE < {} AND api_person.incrime_id=api_crime.crimeID AND crimedate > date '{}-{}-1' AND crimedate < date '{}-{}-28';".format(arr[x * 2], arr[x * 2 + 1], year1, month1, year2, month2)
            cursor.execute(q)
            r = cursor.fetchone()
            injured = r[0]
            q = "SELECT count(case isunharmed WHEN 1 then 1 else null end)/count(*) FROM API_PERSON, API_CRIME WHERE AGE > {} AND AGE != 0 AND AGE < {} AND api_person.incrime_id=api_crime.crimeID AND crimedate > date '{}-{}-1' AND crimedate < date '{}-{}-28';".format(arr[x * 2], arr[x * 2 + 1], year1, month1, year2, month2)
            cursor.execute(q)
            r = cursor.fetchone()
            unharmed = r[0]
            person = Query1(arr[x * 2], arr[x * 2 + 1], killed, injured, unharmed, arrested)
            people.append(person)

        serializer = Query1Serializer(people, many=True)
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
    return Response(status=status.HTTP_400_BAD_REQUEST)

# class GunListView(generics.ListAPIView):
#     queryset = Gun.objects.raw('SELECT * FROM api_gun FETCH NEXT 5 ROWS ONLY')
#     serializer_class = GunSerializer
#
# class CrimeListView(generics.ListAPIView):
#     queryset = Crime.objects.all()
#     serializer_class = CrimeSerializer
#
# class PersonListView(generics.ListAPIView):
#     queryset = person.objects.all()
#     serializer_class = PersonSerializer
#
# class StateListView(generics.ListAPIView):
#     queryset = State.objects.all()
#     serializer_class = StateSerializer