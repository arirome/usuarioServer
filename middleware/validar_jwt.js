const {response, request}=require('express')
const jwt= require('jsonwebtoken')
const User= require('../models/user')

const validar_jwt= async(req=request,res=response, next)=>{

    const token=req.header('x-token')
    console.log(token)
    //se verifica el token que viene de los headers
    if (!token) {
        return res.status(401).json({
            msg:'token inavalido'
        })        
    }

try {
   
    //si existe token
    const {id}=jwt.verify(token, process.env.SECRET)
    console.log(id)
    const usuario= await User.findById(id)
console.log(usuario)
//verifica si el usuario existe
    if (!usuario) {
        return res.status(401).json({
            msg:'token inavalido'
        })        
    }
    //si el usuario existe entonces establece informacion del mismo usuario en el req
    req.usuario=usuario

    next()

} catch (error) {
    console.log(error)
    return res.status(401).json({
        msg:'token inavalido'
    })      
}
}

module.exports={

    validar_jwt
}