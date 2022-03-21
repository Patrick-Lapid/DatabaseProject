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

### To-Do
Create models, Connecting Oracle Database - Andy
<br>
Clean Data from excel then bulk load CSVs into Oracle - Andy and Patrick
<br>
Create Django RestAPI endpoints for Data - Patrick
<br>
Create Queries in SQL - Andy and Patrick
<br>
Data Visualization Mockup Components for Data-Explore page - Vincent, Skylar
<br>
Connecting Data Visualization Components with backend API - Vincent, Skylar
