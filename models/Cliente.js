const mongoose = require('mongoose');

// Mediante el orm de mongoose se crean los campos para los schemas de forma automática
const ClientesSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: true,
        trim: true // Elimina espacios en blanco al inicio y al final
    },
    apellido:{
        type: String,
        require: true,
        trim: true // Elimina espacios en blanco al inicio y al final
    },
    dni:{
        type: String,
        require: true,
        trim: true // Elimina espacios en blanco al inicio y al final
    },
    empresa:{
        type: String,
        require: true,
        trim: true // Elimina espacios en blanco al inicio y al final
    },
    email:{
        type: String,
        require: true,
        trim: true,
        unique: true // Elimina espacios en blanco al inicio y al final
    },
    telefono:{
        type: String,
        trim: true // Elimina espacios en blanco al inicio y al final
    },
    creado:{
        type: Date,
        default: Date.now()
    },
    vendedor: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'Usuario'
    }

});

module.exports = mongoose.model('Cliente', ClientesSchema);