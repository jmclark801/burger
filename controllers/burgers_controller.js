const express = require('express');
var router = express.Router();
const burger = require('../models/burger.js');

router.get('/', function(req, res){
  burger.all(function(data){
    var hbsObject = {
      burgers: data
    }
    res.render('index', hbsObject);
  });
});

router.post('/api/burgers', function(req, res){
  burger.insertOne(["burger_name", "devoured"], req.body.burger_name, function(result){
    res.json(result);
  })
})

router.put('/api/burgers/:id', function(req, res){
  var burgerToUpdate = req.params.id;
  var burgerDevouredStatus = req.body.devoured
  burger.updateOne(burgerToUpdate, burgerDevouredStatus, function(result){
    res.json(result);
  });
})


module.exports = router;