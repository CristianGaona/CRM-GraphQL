// Importaciones
const Usuario = require('../models/Usuario');
const Producto = require('../models/Producto');
const Cliente = require('../models/Cliente');
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
        obtenerUsuario: async(_, { token }) =>{
            const usuarioId = await jwt.verify(token, process.env.SECRETA)
            return usuarioId;
        },

        obtenerProductos: async ()=>{
            try {
                const productos = await Producto.find({});
                return productos
            } catch (error) {
                console.log(error)
            }

        },

        obtenerProducto: async(__, { id })=>{
            // Revisar si el producto existe o no
            const producto = await Producto.findById(id);
            if(!producto){
                throw new Error('Producto no encontrado');
            }

            return producto;
        }
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

            
            try {
                const  usuario = new Usuario(input); // Crear usuario
                usuario.save(); // Guardar en la base de datos
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
        },

       // Registrar Nuevo producto
        nuevoProducto: async (__, { input }) =>{
            try {

                //Crear producto
                const producto = new Producto(input);

                //Almacenar en la bd
                const resultado = await producto.save();
                return resultado;
            } catch (error) {
                console.log("Error")
            }

        },
        //Ac
        actualizarProducto: async (__, {id, input})=>{
            // Revisar si el producto existe o no
            let producto = await Producto.findById(id);
            if(!producto){
                throw new Error('Producto no encontrado');
            }

            //Guardar en la BD
            producto = await Producto.findOneAndUpdate( { _id: id}, input, { new: true});
            return producto;
        },
        // Eliminación de productos
        eliminarProducto: async (_, { id })=>{
            let producto = await Producto.findById(id);
            if(!producto){
                throw new Error('Producto no encontrado');
            }

            // Eliminamos de la BD
            await Producto.findOneAndDelete({ _id : id});
            return "Producto eliminado"
        },
        // Registro de clientes
        nuevoCliente: async (_, { input }, ctx)=>{
            console.log(ctx)
            const {dni} = input;
            
            // Verificar si el cliente esta registrado
            const existeCliente = await Cliente.findOne({dni});
            if(existeCliente){
                throw new Error ("El cliente ya se encuentra registrado")
            }
            const cliente = new Cliente(input);

            //Asignar vendedor
            cliente.vendedor = ctx.usuario.id;

            //Guardar nuevo registro

            try {
                
                const resultado = await cliente.save();
                return resultado;
            } catch (error) {
                console.log("No se ha registrado el cliente")
            }
            

        }


    }
  };

  // Exportar archivo
module.exports = resolvers;