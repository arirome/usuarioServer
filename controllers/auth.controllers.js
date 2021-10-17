
const User=require('../models/user')
const {generar_jwt}= require('../helpers/generar_jwt');

const ctrlAuth={}

//controlador que permite iniciar sesion a un usuario 
ctrlAuth.login= async (req, res) => {
    const {username, password,rol} = req.body;
        const usuario= await User.findOne({username, password,rol})
         //si no existe el usuario
        if (!usuario) {
            return res.status(401).json({
                msg:'el usuario no existe'
            })    
        }
        //si existe
       const token= await generar_jwt(usuario.id)
        res.status(401).json({
            msg:'el usuario si existe',
            token
        })
}

module.exports= ctrlAuth;

