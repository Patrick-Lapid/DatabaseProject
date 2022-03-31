# DatabaseProject

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
npm i webpack webpack-cli --save-dev
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
npm i react react-dom --save-dev
npm install @babel/plugin-proposal-class-properties
npm install react-router-dom
npm install --save-dev style-loader css-loader
```

### Compile the Front-End

Run the production compile script

```bash
npm run dev
```
###Install CX_Oracle
Run the pip install or just install all modules from above command
```commandline
pip install cx_Oracle
```
Go to this link and install proper Oracle Client version
https://www.oracle.com/database/technologies/instant-client/winx64-64-downloads.html

Then set up the path variable to where all the DLL files are in your environment variables, be sure to unzip the file!
In system Path environmental variables, add file path
<br>
![Screenshot 2022-03-21 172607](https://user-images.githubusercontent.com/53315150/159366659-d0b5af3b-2286-42e9-8703-34daa0315629.png)
![Screenshot 2022-03-21 172632](https://user-images.githubusercontent.com/53315150/159366668-33d480dd-d514-4fa4-80f4-1c39a7d4ed7e.png)

###IMPORTANT:
Please be sure to remove the username and password from settings.py after completion of the project!
=======

### To-Do
<br>
Create Django RestAPI endpoints for Data - Patrick
<br>
Create Queries in SQL - Andy and Patrick
<br>
Data Visualization Mockup Components for Data-Explore page - Vincent, Skylar
<br>
Connecting Data Visualization Components with backend API - Vincent, Skylar
