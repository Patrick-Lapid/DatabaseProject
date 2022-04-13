# DatabaseProject

In the United States, gun violence has dominated headlines, conversation, and political debates for decades. Incidents involving gun violence have continued to contribute to the emotional and persistent debate over the amount and control of guns in the United States. Gun violence in America affects all of us in some way, and recently has become way too established and familiar in our  society. By administering this tool for comprehensible data analysis on gun-violence, the hope is that the app will equip users to form more educated opinions on gun safety concerns and develop a better understanding of the relationships involved in these incidents.

#

![website2](https://user-images.githubusercontent.com/53315150/163247647-ff50253f-d1a0-4774-8010-a1f2aa29a0ff.png)

#

![website3](https://user-images.githubusercontent.com/53315150/163247654-0e50d456-b913-4581-9c1d-893ff0bb6648.png)


## Setup Instructions

### Install Required Python Modules

Create external python virtual environment then run this command
```bash
pip install -r requirements.txt
```
### Start Web Server

To start the web server you need to run the following sequence of commands.

First cd into DatabaseProject.

Only run this when updating database
```bash
python manage.py makemigrations
python manage.py migrate
```

Next run the django web server.
```bash
python manage.py runserver
```

### [Install Node.js](https://nodejs.org/en/)

### Install Node Modules

First cd into the ```frontend``` folder.
```bash
cd frontend
```

Next install all dependicies.
```bash
npm i 
```

### Compile the Front-End

Run the production compile script

```bash
npm run dev
```
