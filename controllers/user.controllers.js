const ctrlHome = {};
const { findById, findByIdAndUpdate, findByIdAndDelete } = require('../models/user');
const User = require('../models/user');


//leer los usuarios 
// Devuelve todos los usuarios de la colección
ctrlHome.rutaGet = async (req, res) => {
    const users = await User.find({ activo: true }) // consulta para todos los documentos
    // Respuesta del servidor
    res.json(users);
}
//almacena un nuevo usuario
ctrlHome.rutaPost = async (req, res) => {
    const {username,password,rol} = req.body;
    try {
      const user= new User({username,password,rol});
      
      await user.save();
      res.json({
        msg: 'usuario creado con exito',
      });
    } catch (error) {
      console.log("Error al crear el nuevo usuario: ", error);
      res.status(500).json({ msg: "Error al crear nuevo usuario" });
    }
}
//actualizar la informacion de los usuarios
ctrlHome.rutaPut = async (req, res) => {
    const id = req.params.id;
    const users= req.body;
    try {
        const user = await User.findByIdAndUpdate(id,users,{ new: true })
        res.json({
            msg: 'usuario actualizado correctamente',
        })
      } catch (error) {
        console.log("Error al crear el nuevo usuario: ", error);
        res.status(500).json({ msg: "Error al crear nuevo usuario" });
      }
}
//  eliminar un usuario de la BD físicamente
ctrlHome.rutaDelete = async (req, res) => {
    const  id = req.params.id;   
    try {
        await User.findByIdAndDelete(id)
        res.json({
            msg: 'usuario eliminado correctamente'
        })
    } catch (error) {
        console.log('Error al eliminar usuario: ', error)
    }
}
module.exports = ctrlHome;