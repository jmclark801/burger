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
  insertOne: function(objColVals, name, cb){
    orm.insertOne('burgers', objColVals, name, function(res){
      cb(res);
    })
  }

}

module.exports = burger;