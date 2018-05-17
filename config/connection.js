// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
var mysql = require("mysql");

// Set up  connection 
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "George91",
  database: "foodBoxHero_db"
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//exporting the shit
module.exports = connection;
