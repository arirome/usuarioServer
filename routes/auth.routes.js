const routerAuth = require('express').Router();
const { body, check } = require('express-validator');
const { validarCampos } = require('../helpers/validacionCampos.js');
const {
    siExisterol,
}= require('../middleware')
const { 
    login
 } = require('../controllers/auth.controllers');

 //enviar y validar la informacion del usuario logueado 
routerAuth.post('/login',

body('username', 'El username ingresado no contiene un formato correcto')
.isString()
.not()
.isEmpty(),

body('password', 'El password ingresado no contiene un formato correcto')
.isString()
.not()
.isEmpty(),

body('rol', 'el rol seleccionado no es válida')
.not()
.isEmpty()
.custom(siExisterol),

validarCampos,

 login)


module.exports = routerAuth;