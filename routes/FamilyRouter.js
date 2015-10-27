var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var User = mongoose.model('User');
var Family = mongoose.model('Family');
var Story = mongoose.model('Story');
var passport = require('passport');


router.param('id', function(req,res,next){
Family.findOne({_id:id}, function(err,result){
  if(err) return next(err);
  if(!result) return next({err: "Couldnt find a family with that id"});
  req.family = result;
  next();
  });
});

router.get('/:id', function(req,res,next){
  Family
  .findOne({_id: req.params.id},
    function(err,result){
    if(err) return next(err);
    // console.log("I made it to the route file. about to send response");
    res.send(req.book);
  });
});


router.post('/register', function(req, res, next) {
  console.log('hi there');
  var user = new User(req.body);
  user.setPassword(req.body.password);
  user.save(function(err, result) {
    if(err) return next(err);
    if(!result) return next("There was an issue registering that user.");
    res.send(result.createToken());
  });
});

// router.post('/login', function(req, res, next) {
//   passport.authenticate('local', function(err, user){
//     if(err)return next(err);
//     res.send(user.createToken());
//   })(req, res, next);
//
// });

// router.post('/comment', function(req, res, next){
//   console.log(req.body);
// });


router.post('/', function(req,res,next){
  var family = new Family(req.body);
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
