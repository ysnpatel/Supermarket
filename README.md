# Supo

# Supo is a web application frontend and backend that a new grocery business could utilize, the frontend connects to the backend and consumes the api it offers.

 ### Some features are:  
                    
    - User authentication            
    - Basic security authentication (bcrypt for salt and hash)
    - Selecting categories from which to select items
    - Adding items to cart
    - Completing the checkout process
    - Simple and aesthethic UI for easy learning
    - Users & products (CRUD operations)
    - Backend is ready for frontend to consume it's api services

## How to run backend

    If you want to run this locally:
    - Clone the backend project to your local.
    - You will need to connect up a mysql server whether on the cloud or locally.
    - You can connect to the backend by adding your mysql details in db.config.js
    - In the project directory, run 
     npm install
     then,
     npm start

## How to run frontend

    - Clone this frontend project to your local.
    - In the project directory, run
     npm install (if there are peer dependecy issues with npm install, you can try npm install --legacy-peer-deps)
     npm start
     your default browser should automatically open to localhost:3000
    - In the Cart and Categories components, change the port for the api call to whatever port you run your backend on

The app and its functionality should be ready to use.
