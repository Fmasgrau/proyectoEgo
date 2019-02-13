'use strict'


//modelos
var User = require('../models/user');

//acciones
function pruebas (req, res){
    res.status(200).send({

        message: 'Probando'
    });
}

function saveUser(req, res){
    //crear objeto usuario
    var user = new User ();
    //recoger parametros petición , devuelve un Json
    var params = req.body;

    //asignar valor al usuario

    user.name = params.name;
    user.surname = params.surname;
    user.password = params.password;
    user.mail = params.mail;
    user.role = 'ROLE_USER';
    
    //Guardar Usuario

    user.save((err, userStored) => {

        if(err){
            res.status(500).send({message: "Se produjo un error al guardar"});
        }if(!userStored){
            res.status(404).send({message: "No se ha registrado el usuario"});
        }else{
            res.status(200).send({message: user});
        }
    });
    
    
};

module.exports = {

    pruebas,
    saveUser
}