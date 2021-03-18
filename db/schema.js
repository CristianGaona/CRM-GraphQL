const { gql } = require('apollo-server');

// Schema
// Los inputs puede implementarse en los queries o resolvers
const typeDefs = gql`
   # 3
   type Usuario{
       id: ID
       nombre: String
       apellido: String
       email: String
       creado: String
   } 
   type Token {
       token: String
   }

   type Producto{
       id: ID
       marca: String
       modelo: String
       anio: Int
       puertas: Int
       color: String
       transmision: String
       existencia: Int
       precio: Float
       creado: String   
   }

   type Cliente{
       id: ID
       nombre: String
       apellido: String
       dni: String
       empresa: String
       email: String
       telefono: String
       creado: String
       vendedor: ID
   }

   #2
   input UsuarioInput{
       nombre: String!
       apellido: String!
       email: String!
       password: String!
   }

   input AutenticarInput{
        email: String!
        password: String!
   }

   input ProductoInput{
       marca: String!
       modelo: String!
       anio: Int!
       puertas: Int!
       color: String!
       transmision: String!
       existencia: Int!
       precio: Float!
   },

   input ClienteInput{
       nombre: String!
       apellido: String!
       dni: String
       empresa: String!
       email: String!
       telefono: String
   }

   type Query{
       # Usuarios
       obtenerUsuario(token: String!) : Usuario

       # Productos
       obtenerProductos: [Producto]
       obtenerProducto(id:ID!): Producto

   }
   
   #1
   type Mutation{
       # Usuarios
       nuevoUsuario(input: UsuarioInput): Usuario
       autenticarUsuario(input: AutenticarInput) : Token

       # Productos
       nuevoProducto( input: ProductoInput): Producto
       actualizarProducto(id: ID!, input: ProductoInput): Producto
       eliminarProducto(id: ID!): String

       # Clientes
       nuevoCliente(input: ClienteInput): Cliente
   }
`;

// Exportar archivo para llamarlos dentro de otros directorios/archivos
module.exports = typeDefs;