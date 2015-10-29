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
  console.log(id);
User.findOne({_id:id}, function(err,result){
  if(err) return next(err);
  if(!result) return next({err: "Couldnt find a user with that id"});
  // console.log(result);
  req.user = result;
  next();
  });
});



router.post('/:id/add_family', auth,function(req,res,next){
var fam = new Family(req.body);
fam.members.push(req.user.id);
// console.log(fam);
fam.save(function(err,result){
  // console.log(fam._id);
  // console.log(User);
  // console.log(req.body.familyName);
  User.update({_id: req.user.id}, {$push: {family: fam}},
    function (err, result) {
  // if (err) res.status(500).send({err: "Error updating"});
  // if(!result) res.status(500).send({err: "Error updating"});
  // console.log(fam);
  res.send(result);
    });
  });
});


//add story and push story into family
router.post('/:id/add_story', auth,function(req,res,next){
var astory = new Story(req.body);
// console.log(id, "line 49 user router");
// astory.createBy = req.payload.username;
// console.log(astory , " a story");
// astory.
Family.findOne({familyName:req.body.family}, function(err,result){
  if(err) return next(err);
  if(!result) return next({err: "Couldnt find a user with that id"});

  // req.user = result;
  result.update({$push: {stories: astory}},
    function(err,result){
     if(err) return next(err);
     if(!result) return next({err: "Couldnt find a user with that id"});
  // next();
  });
  console.log(req.user._id);
console.log(req.body);
astory.save(function(err,result){

  User.update({_id: req.user._id}, {$push: {story: astory}},
    function (err, result) {
  res.send(result);
      });
    });
  });
});



//Get a ALL STORIES ASSOCIATED WITH A USER (in story array)
router.get('/:id/story', function(req,res,next){
  // console.log("HELLO!");
// console.log(req.payload._id);
User
  .findOne({_id: req.user.id},'story')
    .populate('story','title')
    .exec(function(err,result){
      if(err) return next(err);
      if(!result) return next("There was an issue posting the story");
      // console.log(req.payload.username);
console.log(result);
      res.send(result);
    });
});


//Get a ALL Families ASSOCIATED WITH A USER (in family array)
router.get('/:id/family', function(req,res,next){
  console.log("HELLO!");
// console.log(req.payload._id);
User
  .findOne({_id: req.user.id},'family')
    .populate('family','familyName')
    .exec(function(err,result){
      if(err) return next(err);
      if(!result) return next("There was an issue posting the afamily");
      // console.log(req.payload.username);

      res.send(result);
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

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user){
    if(err)return next(err);
    res.send(user.createToken());
  })(req, res, next);

});

// router.post('/comment', function(req, res, next){
//   console.log(req.body);
// });


module.exports = router;
