// Importaciones
const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config({path: 'variables.env'});


const crearToken =  (usuario, secreta, expiresIn)=>{
    console.log(usuario);
    const { id, email, nombre, apellido} = usuario;
    return jwt.sign({id}, secreta, { expiresIn })
}
// Resolvers
// 1. _ objetos retornados por el resolver padre (consultas anidadas)
// 2. {input} argumentos
// 3. context (ctx) objeto que se comparte entre todos los resolvers
// 4. infotmación (info) sobre la consulta actual
const resolvers = {
    Query: {
      obtenerCurso: () => "Hola"
    },
    Mutation:{
        // Registrar usuarios
        nuevoUsuario: async (_, { input }) => {
            const {email, password} = input; //distructuring

            // Revisar si el usuario esta registrado
            const existeUsuario = await Usuario.findOne({email});
            console.log(existeUsuario);
            if (existeUsuario){
                throw new Error('El usuario ya esta registrado');
            }


            // Hashear password
            const salt = await bcryptjs.genSalt(10);
            input.password = await bcryptjs.hash(password, salt);

            // Guardar en la base de datos
            try {
                const  usuario = new Usuario(input);
                usuario.save(); // guardarlo
                return usuario;
            } catch (error) {
                console.log(error);
            }
    
        },

        // Auntentificar Usuarios
        autenticarUsuario: async (_, { input }) =>{
            const { email, password} = input;

            // Si el usuario existe
            const existeUsuario = await Usuario.findOne({email});
            if (!existeUsuario){
                throw new Error('El usuario no existe!');
            }

            // Revisar si el password es correcto
            const passwordCorrecto = await bcryptjs.compare(password, existeUsuario.password);
            if(!passwordCorrecto){
                throw new Error('El password es incorrecto')
            }
            // Crear el Token
            return {
                token: crearToken(existeUsuario, process.env.SECRETA, '24h')
            }
        }

    }
  };

  // Exportar archivo
module.exports = resolvers;