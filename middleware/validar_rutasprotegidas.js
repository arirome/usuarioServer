const { response, request } = require('express')

//verificar si tiene el rol de administrador
const isadmin = (req = request, res = response, next) => {

    //validacion para asegurarme que estoy llamando correctamente al admin
    if (!req.usuario) {
        return res.status(500).json({
            msg: 'Se intenta verificar el role sin validar el token'
        });
    };

    //destructurar 
    const { rol } = req.usuario;
 
    if (rol !== 'admin') {
        return res.status(401).json({
            msg: `el rol que usted tiene no pertenece al de un Administrador`
        });
    }

    next();

};

//espero recibir todos mis roles
const roluser = (...rol) => {

//retornar una funcion que se ejecuta cuando se pase por el roluser
    return (req,res=response,next)=>{

        //verificaciones
        if (!req.usuario) {
            return res.status(500).json({
                msg: 'Se intenta verificar el role sin validar el token'
            });
        };

        if (!rol.includes(req.usuario.rol)) {

            return res.status(401).json({
                msg: `el rol que usted tiene no esta autorizado para esta acción`
            });
  
        }

        next();
    }


};

module.exports={

    isadmin,
    roluser
}