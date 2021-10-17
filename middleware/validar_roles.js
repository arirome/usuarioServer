const Roles = require('../models/roles');

//verificar si en la BD existe el rol ingresado por el usuario
const siExisterol = async (rol = '')=> {
    const rolEcontrado = await Roles.findOne({rol})
    if(!rolEcontrado){
        throw new Error('el rol especificado no existe')
    }
}

module.exports = {
    siExisterol
}