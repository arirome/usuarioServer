const router = require('express').Router();
const { validarCampos } = require('../helpers/validacionCampos.js');
const { body, check } = require('express-validator');
const { 
    rutaGet, rutaPost, rutaPut, rutaDelete
 } = require('../controllers/user.controllers');
const {
    validar_jwt,
    siExisterol,
    isadmin,
    roluser
}= require('../middleware')

//leer informacion del usuario y realizar las validaciones de los campos y del token
router.get('/get-user',

validar_jwt,
roluser('admin', 'collaborator', 'communt'),
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
rutaGet)

//enviar informacion del usuario y realizar las validaciones de los campos y del token
router.post('/create-user',
validar_jwt,
roluser('admin', 'collaborator'),
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
 rutaPost)

 //actualizar informacion del usuario y realizar las validaciones de los campos y del token
router.put('/edit-user/:id',
validar_jwt,
isadmin,
body('id','No es un id de MongoDB válido').isMongoId(),
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
rutaPut,)

//eliminar informacion del usuario y realizar las validaciones de los campos y del token
router.delete('/delete-user/:id',
validar_jwt,
isadmin,
body('id','No es un id de MongoDB válido').isMongoId(),
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
rutaDelete)

module.exports = router;