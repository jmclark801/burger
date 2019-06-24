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
    orm.insertOne('burgers', cols, vals, function(res){
      cb(res);
    })
  },
  updateOne: function(burgerToUpdate, burgerDevouredStatus, cb) {
    orm.updateOne('burgers', burgerToUpdate, "devoured", burgerDevouredStatus, function(res){
      cb(res);
    })
  }
}

module.exports = burger;