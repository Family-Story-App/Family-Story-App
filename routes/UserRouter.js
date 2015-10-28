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
User.findOne({_id:id}, function(err,result){
  if(err) return next(err);
  if(!result) return next({err: "Couldnt find a user with that id"});
  req.user = result;
  next();
  });
});



router.post('/:id/add_family', auth,function(req,res,next){
var fam = new Family(req.body);
fam.save(function(err,result){
  console.log(fam._id);
  console.log(User);
  User.update({_id: req.user._id}, {$push: {family: fam._id}}, function (err, result) {
  // if (err) res.status(500).send({err: "Error updating"});
  // if(!result) res.status(500).send({err: "Error updating"});
  console.log(fam);
  res.send(result);
    });
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
