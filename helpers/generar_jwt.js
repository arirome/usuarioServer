
const { token } = require("morgan")
const jwt= require ('jsonwebtoken')

const generar_jwt= (id= '')=>{
//como quiero que trabaje con promesas hago un return de una 
   return new Promise((resolve, reject)=>{

    //crear lo que voy a generar en el payload
    const payload={ id }
   //instruccion para generar el jwt
    jwt.sign(payload, process.env.SECRET, (err, token)=>{

        //si hay errores
        if (err) {
            reject('error al generar el token')           
        }
        //si todo sale bien
        resolve(token)
    })
   })
}

module.exports={
    generar_jwt
}