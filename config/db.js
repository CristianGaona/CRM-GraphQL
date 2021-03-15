const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'}); // Path de la variable de conexión

const conectarDB = async () =>{
    try{
        await mongoose.connect(process.env.DB_MONGO,{ // Invocación a la variable de entorno de la conexión a la BD
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true

        });
        console.log('Conexión éxitosa');

    }catch(error){
        console.log('Error de Conexión');
        console.log(error);
        process.exit(1) // Detener la aplicación si no hay conexión

    }
}

module.exports = conectarDB;