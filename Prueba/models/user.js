'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema ({
    name : String,
    password : String,
    surname : String,
    mail : String,
    role : String
});

module.exports = mongoose.model('User', UserSchema);