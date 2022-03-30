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

# Features

## Splash Page & User Authentication

Users can log in with an existing account or signup to create a new account. If the user doesn't want to make an account, they can log in by using the demo user log in.

### Logged Out User
<img src="https://i.postimg.cc/RhFmKCbj/0-C75-D329-CF97-468-C-A673-F3-F216-FC8-EB7.jpg" />
<img src="https://i.postimg.cc/qqYPKsK3/218-C7-E97-A5-EE-43-DD-9-F56-FBEA69-FF9-D1-D.jpg" />
<img src="https://i.postimg.cc/66GWtcvK/78-DFBB3-A-96-E1-4-FDD-8970-8412-AC01-C61-A.jpg" />

### Logged In User
<img src="https://i.postimg.cc/x1jZdph4/4521-BC76-2-CB6-42-CF-B518-1-E4935136-B99.jpg" />


## Listings 
Users can view all the listings that they have posted as well as all the listings that other hosts have posted. Users can view a single listings details, leave a review on the listing, edit a listing, or book a listing. If the user is the host, they can edit or cancel their own listing. If the user is not the host, the can book a listing.

### Listings Feed Page
<img src="https://i.postimg.cc/8k6cyty9/F8-A7-D077-B6-DA-4037-BFF0-0454-CC8-A01-A2.jpg" />

### Listing Detail Page

<img src="https://i.postimg.cc/2y0Z7xF2/E29-C5732-1695-4-D89-8751-01-D73-CB8146-E.jpg" />

<img src="https://i.postimg.cc/3NzKh4K3/124-D3-CC7-07-ED-4-AED-A81-D-9-EAF1783-FDDB.jpg" />

<img src="https://i.postimg.cc/sgHRCGKq/E8228-C9-D-2417-4-D8-E-A434-5-AC48-DFBA010.jpg" />


## Reviews

Logged in users can leave a review on a listing as well as edit or delete the review if they created it.

<img src="https://i.postimg.cc/B6YFxgCN/F1-D28-EC9-5-DBC-4-D25-AE12-721-D77-A04809.jpg" />
<img src="https://i.postimg.cc/MG8ZFQTw/02-F1-A6-CF-87-CB-43-B1-8-A4-E-BACA39-D26191.jpg" />


## Become a Host

Logged in users can become a host by clicking on the Become A Host button on the Navbar or click on the button on the splash page and it will take the user to the create new listing page.

<img src="https://i.postimg.cc/MGY3JCWT/62-FC68-BA-39-AA-4-C5-C-B5-BC-1-E5181-EE1-B1-B.jpg" />
<img src="https://i.postimg.cc/zvvcjxYf/7358-B627-AE05-4-D48-90-ED-3-FEF18826-C40.jpg" />


## Bookings 
Logged in users can view all the listings that they have booked in the past as well as their upcoming trips by navigating to the bookings page. Users can also click on their individual bookings to view, edit or cancel their bookings.

<img src="https://i.postimg.cc/JzL9wcbp/AB3-F773-F-FEC5-4-F2-B-BA0-B-6-A5-CD3728-A0-A.jpg" />
<img src="https://i.postimg.cc/CLHc8yq4/E5-BB347-A-C730-4-C96-A7-B1-451089688441.jpg" />
<img src="https://i.postimg.cc/XvhLW4Rn/49-F179-B5-254-F-4-BBD-9-B65-8288-A721-A398.jpg" />
<img src="https://i.postimg.cc/L5FVqv47/A9292074-B18-B-4855-B2-CD-BBD9-D0970-F68.jpg" />
<img src="https://i.postimg.cc/9fXtZrhm/B313-BBBA-880-C-4113-8842-8-CBEA9-ED4-F53.jpg" />
