var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var StorySchema = new mongoose.Schema({
    Title: String,
    body: String,
    photo: String,
    tags: String,
    createBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    created: Date,
    deleted: Date,
    family: {type: mongoose.Schema.Types.ObjectId, ref: 'Family'},
    comments: [{
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    body: String,
    // rating: Number,
    postedOn: Date
  }]
});

mongoose.model('Story', StorySchema);
