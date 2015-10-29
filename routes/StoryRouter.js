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

    // sets router to search for objects with prop:id
router.param('id', function(req, res, next, id){
  // console.log('blah blah');
  Story.findOne({_id: req.params.id}, function(err, result){
    if(err) return next(err);
    if(!result) return next('Could not find story of id: ' + id);
    req.story = result;
    next();
  });
});


router.put('/:id', auth,function(req,res,next){
  Story.update({_id: req.params.id},req.body,
  function(err,result){
    // console.log(req.body + "req.body");
    // console.log(req.params.id + "reqparams.id");
  if(err) return next(err);
  if(!result) return next("Could not create the object. Please check all fields.");
  // console.log(result);
  res.send(result);
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


 //Adding a new story
router.post('/:id/add_story', function(req, res, next) {
  // console.log(req.body.id, "line 59 sr");
  var astory = new Story(req.body.story);
  console.log(astory.stories, "astory line 59 sr");

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
    // console.log(req.user._id);
  // console.log(req.body);
  astory.save(function(err,result){


    User.update({_id: req.body.id}, {$push: {story: astory}},
      function (err, result) {
        if(err) return next(err);
        if(!result) return next({err: "Couldnt find a user with that id"});
        });
      // });
    });
    res.send(result);

  });
  });

router.delete('/:id', function(req, res, next){
  Story.remove({_id: req.params.id}, function(err, result){
    if(err) return next(err);
    res.send();
  });
});
  // Getting all the stories
// router.get('/', function(req,res,next){
//
// // console.log('other GET req');
// Story
//   .find({}, function(err,result){
//     if(err) return next(err);
//     if(!result) return next({err: "Couldnt find a user with that id"});
//     console.log(result);
//   })
//     // .select('title body createBy photo tags family addedBy')
//     // // .populate('createBy', 'username')
//     .populate( 'family','stories')
//     // console.log(Story)
//     .exec(
//     function(err,result){
//       if(err) return next(err);
//       console.log(result);
//       res.send(result);
//     });
// });


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
        console.log('right in post router');
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

router.delete('/:id', function(req,res,next){
  // console.log("I made it to the route file");
  Story.remove({_id: req.params.id}, function(err,result){
    if(err) return next(err);
  res.send();
});
});



module.exports = router;
