// This file contains all connection stuff to get connected to the burgers_db database.

var mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: 3306,
  password: process.env.DB_PASS,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;

