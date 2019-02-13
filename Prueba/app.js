'use strict'

var express = require('express');
var bodyParser = require ('body-parser');

var app = express();

//configuración cabecera y cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Header-Methods","POST,GET,PUT,DELETE,OPTIONS");
    next();
  });

//cargar rutas
var user_routes = require('./routes/user');


//middlewares de bodyparser

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



//rutas base
app.use('/api', user_routes);



module.exports = app;