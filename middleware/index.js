//optimizar las importaciones

const validarJWT=require('../middleware/validar_jwt')
 const validarRoles= require('../middleware/validar_roles');
 const validarRutasProtegidas= require('../middleware/validar_rutasprotegidas')

 module.exports={
     
    ...validarJWT,
    ...validarRoles,
    ...validarRutasProtegidas
 }