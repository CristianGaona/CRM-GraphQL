const mongoose = require('mongoose');

// Mediante el orm de mongoose se crean los campos para los schemas de forma automática
const ProductosSchema = mongoose.Schema({
    marca:{
        type: String,
        require: true,
        trim: true // Elimina espacios en blanco al inicio y al final
    },
    modelo:{
        type: String,
        require: true,
        trim: true 
    },
    anio:{
        type: Number,
        require: true,
        trim: true 
    },
    puertas:{
        type: Number,
        require: true,
        trim: true 
    },
    color:{
        type: String,
        require: true,
        trim: true 
    },
    transmision:{
        type: String,
        require: true,
        trim: true 
    },
    existencia:{
        type: Number,
        require: true, 
    },
    precio: {
        type: Number,
        require: true,
        trim: true
    },
    creado:{
        type: Date,
        default: Date.now()
    }

});


ProductosSchema.index({ modelo : 'text'});

module.exports = mongoose.model('Producto', ProductosSchema);