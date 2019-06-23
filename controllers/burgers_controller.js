const express = require('express');
var router = express.Router();
const burger = require('../models/burger.js');

router.get('/', function(req, res){
  console.log(req.body);
  burger.all(function(data){
    var hbsObject = {
      burgers: data
    }
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/api/burgers', function(req, res){
  console.log(req.body);
  console.log("Post was called!");
  burger.insertOne(["burger_name", "devoured"], req.body.burger_name, function(result){
    res.json(result);
  })
})


module.exports = router;