// This file contains all connection stuff to get connected to the burgers_db database.

var mysql = require('mysql');
require('dotenv').config();
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    password: process.env.DB_PASS,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE
  });
}

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;