var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var User = mongoose.model('User');
var Family = mongoose.model('Family');
var Story = mongoose.model('Story');
var passport = require('passport');

    // sets router to search for objects with prop:id
router.param('id', function(req, res, next, id){
  console.log('blah blah');
  Story.findOne({_id: req.params.id}, function(err, result){
    if(err) return next(err);
    if(!result) return next('Could not find story of id: ' + id);
    req.story = result;
    next();
  });
});

// router.get('/:id', function(req, res, next){
//   Story.findOne({_id: req.params.id}, function(err, result){
//     if(err) return next(err);
//     if(!result) return next('Could not find story of id: ' + id);
//     res.send(result);
//     // console.log(result);
//   });
// });


  // Show specified page when clicked
 router.get('/:id', function(req, res, next){
   console.log(req.params.id);
   Story.findOne({_id: req.params.id}, function(err, result){
     if(err) return next(err);
     res.send(req.story);
   });
 });


  // Adding a new story
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


  // Getting all the stories
router.get('/', function(req,res,next){
<<<<<<< HEAD
  console.log('other GET req');
Story  .find({})
=======
Story
  .find({})
    // .select('title body createBy photo tags addedBy')
    // .populate('createBy', 'username')
    .populate('createdBy', 'username')
>>>>>>> 4773a59b2557fcb0473419766c7e13d22dc9f952
    .exec(function(err,result){
      if(err) return next(err);
      // console.log(result);
      res.send(result);
    });
});


    // Editing a specified story
router.put('/', function(req, res, next){
  Story.update({_id: req.body.IDofStoryToEdit}, req.body.edittedStory, function(err, result){
    if(err) return next(err);
    if(!result) return next(err);
    res.send(result);
  });
});

        //  posting comment   //----------
router.post('/',  function(req, res, next){
    var comment = {
      body: req.body.body
      // commenter: req.payload.username
    };
    req.story.comments.push(comment);
    req.story.save(function(err, result){
    if(err) return next(err);
    if(!result) return next(err);
    console.log('leaving router');
      res.send(req.story);
      // console.log(storySaved);
    });
});





module.exports = router;
