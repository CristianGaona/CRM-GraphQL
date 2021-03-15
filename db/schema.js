const { gql } = require('apollo-server');

// Schema
// Los inputs puede implementarse en los queries o resolvers
const typeDefs = gql`

   type Query{
       obtenerCurso: String
   }
`;

// Exportar archivo para llamarlos dentro de otros directorios/archivos
module.exports = typeDefs;