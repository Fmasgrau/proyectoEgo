'use strict'


var mongoose = require('mongoose');

var app = require('./app');

var port = 3789;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/zoo', { useNewUrlParser: true })
    .then(() => {

        console.log("Se establecio correctamente la conexión a la base de datos.");

        app.listen(port, () => {

            console.log("node y express OK");
        })
    })
    .catch(err => console.log(err));