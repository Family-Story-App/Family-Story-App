var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var StorySchema = new mongoose.Schema({
    title: String,
    body: String,
    photo: String,
    tags: String,
    createBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    deleted: Date,
    family: {type: mongoose.Schema.Types.ObjectId, ref: 'Family'},
    postedOn: Date,
    comments: [{
      commenter: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        body: String,
        postedOn: Date
      }]
});

mongoose.model('Story', StorySchema);
