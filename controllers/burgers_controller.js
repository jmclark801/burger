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
  console.log("Post was called!")
  // burger.insertOne(["burger_name"], body.request.burger_name)
  //res.render('index', )
  // Notes for Starting next time:
  // Working on getting the POST to work.  Check out the cats one.  See how they do it.
  // Does it need to go to a different render?  Some code below is placeholder.
  // insertOne: function(objColVals, name, cb){
  //   orm.insertOne('burgers', objColVals, name, function(res){
  //     cb(res);
  //   })
  // }

})


module.exports = router;