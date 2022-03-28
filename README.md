<h1 align='center' style='font-weight: bold'>BeachBnB</h1>

<br>
</br>

<h1 align='center' style='font-weight: bold'>BeachBnB at a Glance</h1>

BeachBnb is a full-stack applicationan, inspired by AirBnB, that allows users to become a host for their beach home vacation rentals, as well as view the vactation rentals of other users. Logged in users can view the feedpage where they can either click to become a host or navigate to inspired getaway vacation rental suggestions. 

Check out a live version of BeachBnB here: <a href='https://beachbnb.herokuapp.com/'>BeachBnB Live</a>

<br>
</br>

<div align='center'>
<h1 align='center' style='font-weight: bold'>Index</h1>
<a href='https://github.com/memckenna/BeachBnB-Airbnb-Clone/wiki/Database-Schema'>Database Schema</a> - <a href='https://github.com/memckenna/BeachBnB-Airbnb-Clone/wiki/Feature-List'>Feature List</a> 
</div>

<br>
</br>   
    
<div align='center'>
<h1 align='center' style='font-weight: bold'>Technologies Used </h1>

React  |  Redux  |  JavaScript  |  Express  |   Sequelize  |  PostgreSQL  |  HTML5  |  CSS  |  JSON API  |  Git
</div>

BeachBnB is developed using React, Redux, Express, and Sequelize to create a full stack application. Heroku was used for production hosting.

<br>
</br>

## Getting Started
1. Clone this repository
   ```bash
   git clone https://github.com/memckenna/BeachBnB-Airbnb-Clone.git
   ```
2. CD into the backend directory and install dependencies
   ```bash
   npm install
   ```    
3. CD into the front directory and install dependencies
   ```bash
   npm install
   ```    
4. Create a .env file based on the .env.example file given
5. Create a user in psql based on your .env DB_USERNAME
   ```bash
   psql -c "CREATE USER <username> PASSWORD '<password>' CREATEDB"
   ```    
6. Create the databse, migrate, and seed by running the following commands in order
   ```bash
   npm run db:setup
   ```  
   ```bash
    npx dotenv sequelize db:create
   ```  
   ```bash
   npx dotenv sequelize db:migrate
   ```  
   ```bash
   npx dotenv sequelize db:seed:all
   ```  
7. Set up the `proxy` key in the frontend `package.json` so that the frontend can pass `/api` call to backend server by placing the following at the bottom of your `frontend/package.json` file:
    ```json
    "proxy": "http://localhost:5000"
    ```
9. Open up two terminals and cd into the backend and frontend directories, respectively. Start the server in each by running:
   ```bash
   npm start
   ```  

## API Documentation

### `POST /api/test`

A test route to check that the request body is getting parsed correctly.

**Returns** a JSON response of the following format with the JSON payload sent
in the request built into the response as `req.body`:

```javascript
{
  requestBody: req.body
}
```

### `GET /api/spots`

A route to fetch all the spots in the database.

**Returns** a JSON response of the array of spots (`Spots[]`) fetched from the database.

### `GET /api/spots/:id`

A route to fetch a sinlge spot from the database.

**Returns** a JSON response of a single id fetched from the database.


### `POST /api/spot/new`

A route to create a new spot in the database, if the payload sent passes
the validations.

**Returns** a JSON response of the single spot object that was created if the
payload passes validations. If the payload did not pass validations, then the
response will be in the following format:

```javascript
{
  title: string;
  message: string;
  errors: string[];
  stack: string;
}
```

### `PUT /api/posts`
A route to update an exisiting spot in the database, if the payload sent passes the validations.

**Returns** a JSON reponse of a single id fetched from the database with the information updated.




### `DELETE /api/posts`
A route to delete an exisiting spot in the database, if the payload sent passes the validations.

**Returns** a JSON response of a redirect to page with the array of spots (`Spots[]`) fetched from the database.
