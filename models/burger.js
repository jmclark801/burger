var orm = require('../config/orm');

var burger = {
  all: function (cb) {
    orm.selectAll('burgers', function (res) {
      cb(res);
    })
  },
  undevoured: function(cb) {
    orm.selectUndevoured('burgers', function(res){
      cb(res);
    })
  },
  insertOne: function(cols, vals, cb){
    console.log(`Logging from the model: 
                Cols: ${cols},
                Vals: ${vals},
                cb: ${cb}`)
    orm.insertOne('burgers', cols, vals, function(res){
      cb(res);
    })
  }

}

module.exports = burger;