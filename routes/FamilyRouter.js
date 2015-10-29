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


router.param('id', function(req,res,next,id){
Family.findOne({_id:id}, function(err,result){
  if(err) return next(err);
  if(!result) return next({err: "Couldnt find a family with that id"});
  req.family = result;
  next();
  });
});


router.get('/:id', function(req,res,next){
  console.log("made it to route file");
  Family
  .findOne({_id: req.params.id},
    function(err,result){
      if(err) return next(err);
      console.log(result);
      res.send(result);
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

//add user to family
router.patch('/:id', auth,function(req,res,next){

  Family.update({_id: req.params.id},{$push: {members: req.payload.username}},
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
router.get('/', function(req,res,next){

// console.log('other GET req');
Family
  .find({}, function(err,result){
    if(err) return next(err);
    if(!result) return next({err: "Couldnt find a user with that id"});
    // console.log(result);
  }).populate('stories', 'title')
  .exec(
    function(err,result){
      if(err) return next(err);
      console.log(result);
      res.send(result);
    });
});



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

router.post('/:id/add_user', auth,function(req,res,next){
var member = new User(req.body);
// console.log(fam);
member.save(function(err,result){
  // console.log(fam._id);
  // console.log(User);
  console.log(member , + " member");
  Family.update({_id: req.params.id}, {$push: {members: member}},
    function (err, result) {
  // if (err) res.status(500).send({err: "Error updating"});
  // if(!result) res.status(500).send({err: "Error updating"});
  // console.log(fam);
  res.send(result);
    });
  });
});

router.delete('/:id', function(req,res,next){
  // console.log("I made it to the route file");
  Family.remove({_id: req.params.id}, function(err,result){
    if(err) return next(err);
  res.send();
});
});


module.exports = router;
