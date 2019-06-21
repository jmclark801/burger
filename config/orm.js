const connection = require('../config/connection.js');

var orm = {
  selectAll: function (tableInput, cb) {
    console.log("select all was called");
    const queryString = `SELECT * FROM ${tableInput};`
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  selectUndevoured: function (tableInput, cb) {
    console.log('select all undevoured was called');
    const queryString = `SELECT * FROM ${tableInput} WHERE devoured = false;`
    connection.query(queryString, function (err, result) {
      if (err) {
        throw Error('error with selecting undevoured burger').then(function () {
          console.log(Error);
        })
      }
      cb(result);
    })
  },
  insertOne: function (table, cols, name, cb) {
    console.log('insertOne was called!')
    var queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES ${name}, FALSE`;
    console.log(queryString);
    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne: function () {
    console.log('updateOne was called!')
  }
}

module.exports = orm;