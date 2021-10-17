const { model, Schema } = require('mongoose');

const rolSchema = new Schema({
    rol: {
        type: String
    }
})

module.exports = model('rol', rolSchema)