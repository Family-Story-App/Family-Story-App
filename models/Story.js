var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var StorySchema = new mongoose.Schema({
    Title: String,
    body: String,
    photo: String,
    createBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    created: Date,
    deleted: Date,
    reviews: [{
    reviewer: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    body: String,
    rating: Number,
    postedOn: Date
  }]
});

mongoose.model('Story', StorySchema);
