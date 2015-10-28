var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var User = mongoose.model('User');
var Family = mongoose.model('Family');
var Story = mongoose.model('Story');
var passport = require('passport');

router.get('/:id', function(req, res, next){
  Story.findOne({_id: req.params.id}, function(err, result){
    if(err) return next(err);
    if(!result) return next('Could not find story of id: ' + id);
    res.send(result);
    console.log(result);
  });
});

router.post('/', function(req, res, next) {
  var story = new Story(req.body);
  console.log('hi there');
  // user.setPassword(req.body.password);
  story.save(function(err, result) {
    if(err) return next(err);
    if(!result) return next("There was an issue registering that user.");
    res.send(result);
  });
});

router.get('/', function(req,res,next){
Story
  .find({})
    .populate('createdBy', 'username')
    .exec(function(err,result){
      if(err) return next(err);
      // console.log(result);
      res.send(result);
    });
});

router.put('/', function(req, res, next){
  Story.update({_id: req.body.IDofStoryToEdit}, req.body.edittedStory, function(err, result){
    if(err) return next(err);
    if(!result) return next(err);
    res.send(result);
  });
});

// router.post('/comment', function(req, res, next){
//   console.log(req.body);
// });


module.exports = router;
