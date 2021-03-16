const { gql } = require('apollo-server');

// Schema
// Los inputs puede implementarse en los queries o resolvers
const typeDefs = gql`
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

   type Query{
       obtenerCurso: String
   }

   type Mutation{
       nuevoUsuario(input: UsuarioInput): Usuario
       autenticarUsuario(input: AutenticarInput) : Token
   }
`;

// Exportar archivo para llamarlos dentro de otros directorios/archivos
module.exports = typeDefs;