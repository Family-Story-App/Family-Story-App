var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var User = mongoose.model('User');
var Family = mongoose.model('Family');
var Story = mongoose.model('Story');
var passport = require('passport');

router.post('/add', function(req, res, next) {
  console.log('hi there');
  var story = new Story(req.body);
  user.setPassword(req.body.password);
  user.save(function(err, result) {
    if(err) return next(err);
    if(!result) return next("There was an issue registering that user.");
    res.send(result.createToken());
  });
});

router.get('/', function(req,res,next){
Story
  .find({})
    .select('title desc genre author img tags addedBy')
    .populate('addedBy', 'username')
    .exec(function(err,result){
      if(err) return next(err);
      res.send(result);
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


module.exports = router;
