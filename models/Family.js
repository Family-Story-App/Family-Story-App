var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var Familychema = new mongoose.Schema({
  familyName: String,
  origin: String,
  photo: String,
  createBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  created: Date,
  deleted: Date,
  password: String, // if password matches, user is added to family
  stories: [
   {type: mongoose.Schema.Types.ObjectId, ref: 'Story'}
 ],
  members: Array
});

mongoose.model('Family', FamilySchema);
