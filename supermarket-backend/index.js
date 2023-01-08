let express = require("express")
let cors = require("cors") 
let application = express()
const bodyParser = require('body-parser')

application.use(cors())
application.use(bodyParser.json())
application.use(bodyParser.urlencoded({ extended: true })) //puts form data into req.body


///////// add mySQL into project
const mysql = require('mysql2');
const dbConfig = require('./config/db.config.js');
let port1 = 8080

//////// MySQL starts here
var connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

module.exports = connection;

/////// routing / webserver starts hereuser
let usersRoute = require('./Routes/usersRoute')
let productsRoute = require('./Routes/productsRoute')


application.use('/users',usersRoute)
application.use('/products',productsRoute)

application.listen(port1,()=>{console.log(`Server running on http://localhost:${port1}`)})
