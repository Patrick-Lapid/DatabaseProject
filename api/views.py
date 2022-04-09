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
        #Gets the 4 statuses of people in 3 age ranges from a specified year
        arr = [num1, num2, num3, num4, num5, num6]
        people = []
        cursor = connection.cursor()
        for x in range(3):

            #Check that there's count first, return zero in that case
            q="SELECT count(*) FROM API_PERSON, API_CRIME WHERE AGE > {} AND AGE != 0 AND AGE < {} AND api_person.incrime_id=api_crime.crimeID AND crimedate > date '{}-{}-1' AND crimedate < date '{}-{}-28';".format(arr[x*2], arr[x*2 + 1], year1, month1, year2, month2)
            cursor.execute(q)
            r = cursor.fetchone()
            if (r[0] != 0):
                q = "SELECT count(case iskilled WHEN 1 then 1 else null end)/count(*) FROM API_PERSON, API_CRIME WHERE AGE >= {} AND AGE != 0 AND AGE <= {} AND api_person.incrime_id=api_crime.crimeID AND crimedate > date '{}-{}-1' AND crimedate < date '{}-{}-28';".format(arr[x*2], arr[x*2 + 1], year1, month1, year2, month2)
                cursor.execute(q)
                r = cursor.fetchone()
                killed = r[0]
                q = "SELECT count(case isarrested WHEN 1 then 1 else null end)/count(*) FROM API_PERSON, API_CRIME WHERE AGE >= {} AND AGE != 0 AND AGE <= {} AND api_person.incrime_id=api_crime.crimeID AND crimedate > date '{}-{}-1' AND crimedate < date '{}-{}-28';".format(arr[x * 2], arr[x * 2 + 1], year1, month1, year2, month2)
                cursor.execute(q)
                r = cursor.fetchone()
                arrested = r[0]
                q = "SELECT count(case isinjured WHEN 1 then 1 else null end)/count(*) FROM API_PERSON, API_CRIME WHERE AGE >= {} AND AGE != 0 AND AGE <= {} AND api_person.incrime_id=api_crime.crimeID AND crimedate > date '{}-{}-1' AND crimedate < date '{}-{}-28';".format(arr[x * 2], arr[x * 2 + 1], year1, month1, year2, month2)
                cursor.execute(q)
                r = cursor.fetchone()
                injured = r[0]
                q = "SELECT count(case isunharmed WHEN 1 then 1 else null end)/count(*) FROM API_PERSON, API_CRIME WHERE AGE >= {} AND AGE != 0 AND AGE <= {} AND api_person.incrime_id=api_crime.crimeID AND crimedate > date '{}-{}-1' AND crimedate < date '{}-{}-28';".format(arr[x * 2], arr[x * 2 + 1], year1, month1, year2, month2)
                cursor.execute(q)
                r = cursor.fetchone()
                unharmed = r[0]
                person = Query1(arr[x * 2], arr[x * 2 + 1], killed, injured, unharmed, arrested)
            else:
                person = Query1(arr[x * 2], arr[x * 2 + 1], 0, 0, 0, 0)
            people.append(person)
            print(connection.queries)
        serializer = Query1Serializer(people, many=True)
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
    return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@csrf_exempt
def query2(request, year1):

    if(request.method == 'GET'):
        cursor = connection.cursor()
        if (year1 == 2014):
            q = "SELECT API_STATE.STATENAME, COUNT(CRIMEID), API_STATE.YEAR2014 FROM API_CRIME JOIN API_STATE ON API_CRIME.STATE_ID = API_STATE.STATENAME WHERE API_CRIME.CRIMEDATE BETWEEN Date '2013-1-1' AND Date '2014-12-28' GROUP BY API_STATE.STATENAME, API_STATE.YEAR2014;"
        else:
            q = "SELECT API_STATE.STATENAME, COUNT(CRIMEID), API_STATE.YEAR{} FROM API_CRIME JOIN API_STATE ON API_CRIME.STATE_ID = API_STATE.STATENAME WHERE API_CRIME.CRIMEDATE BETWEEN Date '{}-1-1' AND Date '{}-12-28' GROUP BY API_STATE.STATENAME, API_STATE.YEAR{};".format(year1, year1, year1, year1)
        cursor.execute(q)
        r = cursor.fetchall()
        states = []
        for entry in r:
            obj = Query2(entry[0], entry[1], entry[2])
            states.append(obj)

        serializer = Query2Serializer(states, many=True)
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
    return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@csrf_exempt
def query3(request, year1, year2, gender):
    #Returns gender ratios of victim for a specified shooter gender for each year
    #In context return total ratio for the entire time frame

    if (request.method=='GET'):
        #The dict to contain the data from the db, keys = year, value = male, female, unknown, total victims
        victims = {}
        cursor = connection.cursor()
        g = gender.lower().capitalize()
        print(g)

        #get the total victims, male, female for each year
        for x in range(year1, year2 + 1):
            info = []
            q = "WITH maleIncidents(crimes) AS (SELECT UNIQUE API_CRIME.CRIMEID AS crimes FROM API_CRIME JOIN API_PERSON ON API_CRIME.CRIMEID = API_PERSON.INCRIME_ID WHERE API_PERSON.PERSONTYPE = 'Subject-Suspect' AND API_PERSON.GENDER = '{}' AND API_CRIME.CRIMEDATE BETWEEN Date '{}-1-1' AND Date '{}-12-31') SELECT COUNT(API_PERSON.PID) FROM maleIncidents JOIN API_PERSON ON maleIncidents.crimes = API_PERSON.INCRIME_ID WHERE API_PERSON.PERSONTYPE = 'Victim' AND API_PERSON.GENDER = 'Male';".format(
                g, x, x)
            cursor.execute(q)
            r = cursor.fetchone()
            info.append(r[0])
            q = "WITH maleIncidents(crimes) AS (SELECT UNIQUE API_CRIME.CRIMEID AS crimes FROM API_CRIME JOIN API_PERSON ON API_CRIME.CRIMEID = API_PERSON.INCRIME_ID WHERE API_PERSON.PERSONTYPE = 'Subject-Suspect' AND API_PERSON.GENDER = '{}' AND API_CRIME.CRIMEDATE BETWEEN Date '{}-1-1' AND Date '{}-12-31') SELECT COUNT(API_PERSON.PID) FROM maleIncidents JOIN API_PERSON ON maleIncidents.crimes = API_PERSON.INCRIME_ID WHERE API_PERSON.PERSONTYPE = 'Victim' AND API_PERSON.GENDER = 'Female';".format(g, x, x)
            cursor.execute(q)
            r = cursor.fetchone()
            info.append(r[0])
            q = "WITH maleIncidents(crimes) AS (SELECT UNIQUE API_CRIME.CRIMEID AS crimes FROM API_CRIME JOIN API_PERSON ON API_CRIME.CRIMEID = API_PERSON.INCRIME_ID WHERE API_PERSON.PERSONTYPE = 'Subject-Suspect' AND API_PERSON.GENDER = '{}' AND API_CRIME.CRIMEDATE BETWEEN Date '{}-1-1' AND Date '{}-12-31') SELECT COUNT(API_PERSON.PID) FROM maleIncidents JOIN API_PERSON ON maleIncidents.crimes = API_PERSON.INCRIME_ID WHERE API_PERSON.PERSONTYPE = 'Victim';".format(
                g, x, x)
            cursor.execute(q)
            r = cursor.fetchone()
            info.append(r[0] - (info[0] + info[1]))
            info.append(r[0])
            victims[x] = info

        data = []
        #for each dictionary entry, initialize a query3 object and push it to a list to be serialized
        for x in range(year1, year2 + 1):
            obj = Query3(g, x, victims[x][0]/victims[x][3], victims[x][1]/victims[x][3], victims[x][2]/victims[x][3])
            data.append(obj)

        totalVic = 0
        totalFemale = 0
        totalMale = 0
        totalUnknown = 0
        for x in range(year1, year2 + 1):
            totalVic += victims[x][3]
            totalMale += victims[x][0]
            totalFemale += victims[x][1]
            totalUnknown += victims[x][2]

        obj = Query3(g, year2, totalMale/totalVic, totalFemale/totalVic, totalUnknown/totalVic)
        data.append(obj)
        serializer = Query3Serializer(data, many=True)
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
    return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@csrf_exempt
def query4(request, state):
    if (request.method == 'GET'):
        victims = {}
        cursor = connection.cursor()
        for x in range(2013, 2019):
            victims[x] = []
            if (state != 'USA'):
                q = "SELECT COUNT(API_GUN.GUNID) AS total, API_STATE.STATENAME AS stateList FROM API_CRIME JOIN API_STATE ON API_CRIME.STATE_ID = API_STATE.STATENAME JOIN API_GUN ON API_GUN.CRIME_ID = API_CRIME.CRIMEID WHERE API_CRIME.CRIMEDATE BETWEEN DATE '{}-1-1' AND DATE '{}-12-31' AND statename='{}' GROUP BY API_STATE.STATENAME;".format(x, x, 'Florida')
            else:
                q = "SELECT COUNT(API_GUN.GUNID) AS total FROM API_CRIME JOIN API_GUN ON API_GUN.CRIME_ID = API_CRIME.CRIMEID WHERE API_CRIME.CRIMEDATE BETWEEN DATE '{}-1-1' AND DATE '{}-12-31';".format(x,x)
            cursor.execute(q)
            r = cursor.fetchone()
            if (r is None):
                victims[x].append(0)
            else:
                victims[x].append(r[0])
            if (state != 'USA'):
                q = "SELECT COALESCE(COUNT(API_GUN.GUNID), 0) as total, API_STATE.STATENAME AS stateList FROM API_CRIME JOIN API_STATE ON API_CRIME.STATE_ID = API_STATE.STATENAME JOIN API_GUN ON API_GUN.CRIME_ID = API_CRIME.CRIMEID WHERE API_GUN.STOLEN = 'Stolen' AND STATENAME = '{}' AND API_CRIME.CRIMEDATE BETWEEN DATE '{}-1-1' AND DATE '{}-12-31' GROUP BY API_STATE.STATENAME;".format('Florida', x, x)
            else:
                q = "SELECT COALESCE(COUNT(API_GUN.GUNID), 0) as total FROM API_CRIME JOIN API_GUN ON API_GUN.CRIME_ID = API_CRIME.CRIMEID WHERE API_GUN.STOLEN = 'Stolen' AND API_CRIME.CRIMEDATE BETWEEN DATE '{}-1-1' AND DATE '{}-12-31';".format(x,x)
            cursor.execute(q)
            r = cursor.fetchone()
            if (r is None):
                victims[x].append(0)
            else:
                victims[x].append(r[0])
            if (state != 'USA'):
                q = "SELECT COALESCE(COUNT(API_GUN.GUNID), 0) as total, API_STATE.STATENAME AS stateList FROM API_CRIME JOIN API_STATE ON API_CRIME.STATE_ID = API_STATE.STATENAME JOIN API_GUN ON API_GUN.CRIME_ID = API_CRIME.CRIMEID WHERE API_GUN.STOLEN = 'Notstolen' AND STATENAME = '{}' AND API_CRIME.CRIMEDATE BETWEEN DATE '{}-1-1' AND DATE '{}-12-31' GROUP BY API_STATE.STATENAME;".format('Florida', x, x)
            else:
                q = "SELECT COALESCE(COUNT(API_GUN.GUNID), 0) as total FROM API_CRIME JOIN API_GUN ON API_GUN.CRIME_ID = API_CRIME.CRIMEID WHERE API_GUN.STOLEN = 'Notstolen' AND API_CRIME.CRIMEDATE BETWEEN DATE '{}-1-1' AND DATE '{}-12-31';".format(x, x)
            cursor.execute(q)
            r = cursor.fetchone()
            if (r is None):
                victims[x].append(0)
            else:
                victims[x].append(r[0])
            if (state != 'USA'):
                q = "SELECT COALESCE(COUNT(API_GUN.GUNID), 0) as total, API_STATE.STATENAME AS stateList FROM API_CRIME JOIN API_STATE ON API_CRIME.STATE_ID = API_STATE.STATENAME JOIN API_GUN ON API_GUN.CRIME_ID = API_CRIME.CRIMEID WHERE API_GUN.STOLEN = 'Unknown' AND STATENAME = '{}' AND API_CRIME.CRIMEDATE BETWEEN DATE '{}-1-1' AND DATE '{}-12-31' GROUP BY API_STATE.STATENAME;".format('Florida', x, x)
            else:
                q = q = "SELECT COALESCE(COUNT(API_GUN.GUNID), 0) as total FROM API_CRIME JOIN API_GUN ON API_GUN.CRIME_ID = API_CRIME.CRIMEID WHERE API_GUN.STOLEN = 'Unknown' AND API_CRIME.CRIMEDATE BETWEEN DATE '{}-1-1' AND DATE '{}-12-31';".format(x,x)
            cursor.execute(q)
            r = cursor.fetchone()
            if (r is None):
                victims[x].append(0)
            else:
                victims[x].append(r[0])
            print(victims)

        objList = []
        for x in range(2013, 2019):
            count = victims[x][0]
            q4 = Query4(state, victims[x][1]/count, victims[x][2]/count, victims[x][3]/count, x)
            objList.append(q4)
        serializer = Query4Serializer(objList, many=True)
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
    return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@csrf_exempt
def query5(request, year1, year2):
    if (request.method == 'GET'):
        cursor = connection.cursor()
        q = '''
        WITH totalCrimes(total) AS (
        SELECT COUNT(API_CRIME.CRIMEID) AS total
        FROM API_CRIME JOIN API_STATE
        ON API_CRIME.STATE_ID = API_STATE.STATENAME
        WHERE API_CRIME.CRIMEDATE BETWEEN DATE '{}-1-1' AND DATE '{}-12-31'
        ),
        stateCrimes(states, count) AS (
            SELECT API_STATE.STATENAME AS states, COUNT(API_CRIME.CRIMEID)
            FROM API_CRIME JOIN API_STATE
            ON API_CRIME.STATE_ID = API_STATE.STATENAME
            WHERE API_CRIME.CRIMEDATE BETWEEN DATE '{}-1-1' AND DATE '{}-12-31'
            GROUP BY API_STATE.STATENAME
        )
        SELECT API_STATE.statename, coalesce(stateCrimes.count * 1000/ totalCrimes.total, 0)
        FROM totalCrimes, stateCrimes
        RIGHT JOIN api_state ON api_state.statename = states
        '''.format(year1, year2, year1, year2)
        cursor.execute(q)
        print(connection.queries)
        r = cursor.fetchall()
        states = []
        for x in r:
            obj = Query5(x[0], x[1])
            print(obj.state)
            states.append(obj)
        serializer = Query5Serializer(states, many=True)
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
    return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@csrf_exempt
def query6(request, num1, num2, ptype, month1, year1, month2, year2):
    if (request.method == 'GET'):
        cursor = connection.cursor()
        q = "SELECT count(*) FROM API_PERSON, API_CRIME WHERE AGE >= {} AND AGE != 0 AND AGE <= {} AND PERSONTYPE='{}' AND api_person.incrime_id=api_crime.crimeID AND crimedate > date '{}-{}-1' AND crimedate < date '{}-{}-28';".format(num1, num2, ptype, year1, month1, year2, month2)
        cursor.execute(q)
        r = cursor.fetchone()
        print(r[0])
        q6 = Query6(num1, num2, r[0])
        serializer = Query6Serializer(q6)
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