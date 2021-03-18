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
       marca: String,
       modelo: String,
       anio: Int,
       puertas: Int,
       color: String,
       transmision: String,
       existencia: Int
       precio: Float
       creado: String   
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

   input PorductoInput{
       marca: String!
       modelo: String!
       anio: Int!
       puertas: Int!
       color: String!
       transmision: String!
       existencia: Int!
       precio: Float!
   }

   type Query{
       obtenerUsuario(token: String!) : Usuario
   }
   
   #1
   type Mutation{
       # Usuarios
       nuevoUsuario(input: UsuarioInput): Usuario
       autenticarUsuario(input: AutenticarInput) : Token

       # Productos
       nuevoProducto( input: PorductoInput): Producto
   }
`;

// Exportar archivo para llamarlos dentro de otros directorios/archivos
module.exports = typeDefs;