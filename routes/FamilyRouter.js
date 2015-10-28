var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var User = mongoose.model('User');
var Family = mongoose.model('Family');
var Story = mongoose.model('Story');
var passport = require('passport');
var jwt = require('express-jwt');
var auth = jwt({
  secret: "This_is_MY_secret_Phrase",
  userProperty: 'payload'
});


router.param('id', function(req,res,next){
Family.findOne({_id:id}, function(err,result){
  if(err) return next(err);
  if(!result) return next({err: "Couldnt find a family with that id"});
  req.family = result;
  next();
  });
});

router.put('/:id', auth,function(req,res,next){
  Family.update({_id: req.params.id},req.body,
  function(err,result){
    // console.log(req.body + "req.body");
    // console.log(req.params.id + "reqparams.id");
  if(err) return next(err);
  if(!result) return next("Could not create the object. Please check all fields.");
  // console.log(result);
  res.send(result);
  });
});

// router.get('/', function(req,res,next){
//   Family.$where('')
// });


router.post('/', function(req,res,next){
  var family = new Family(req.body);
  // console.log(req.body);
  // family.addedBy = req.body._id;
  family.deleted = null;
  family.save(function(err, result) {
  if(err) return next(err);
  if(!result) return next("Could not create the object. Please check all fields.");
  // result.addedBy = req.payload.username;
  res.send(result);
});
});


module.exports = router;
