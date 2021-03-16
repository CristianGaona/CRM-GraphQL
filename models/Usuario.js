const mongoose = require('mongoose');

// Mediante el orm de mongoose se crean los campos para los schemas de forma automática
const UsuariosSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: true,
        trim: true // Elimina espacios en blanco al inicio y al final
    },
    apellido:{
        type: String,
        require: true,
        trim: true
    },
    email:{
        type: String,
        require: true,
        trim: true ,
        unique: true
    },
    password:{
        type: String,
        require: true,
        trim: true
    },
    // Este campo se agrega de forma automática
    creado:{
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('Usuario', UsuariosSchema);