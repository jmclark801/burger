const connection = require('../config/connection.js');

// Create the ORM
var orm = {
  // Select all from a given table
  selectAll: function (tableInput, cb) {
    const queryString = `SELECT * FROM ${tableInput};`
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // Insert one into a table
  insertOne: function (table, cols, vals, cb) {
    var queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES ("${vals.toString()}", false);`;
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  //{colNmae:value}
  updateOne: function (tableToUpdate, itemToUpdate, colToUpdate, valToSet, cb) {
    // An example of what the SQL should look like:
    // UPDATE burgers SET devoured = true WHERE id = 2;


    var queryString = `UPDATE ${tableToUpdate} SET ${colToUpdate} = ${valToSet} WHERE id = ${itemToUpdate};`

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    })
  }
}

module.exports = orm;