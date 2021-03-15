const { gql } = require('apollo-server');

// Schema
// Los inputs puede implementarse en los queries o resolvers
const typeDefs = gql`

    type Curso{
        titulo: String
        tecnologia: String
    }
    type Tecnologia {
        tecnologia: String
    }

    input CursoInput {
        tecnologia: String
    }

    type Query{
        obtenerCursos(input: CursoInput!) : [Curso]
        obtenerTecnologia : [Tecnologia]
    }
`;

// Exportar archivo para llamarlos dentro de otros directorios/archivos
module.exports = typeDefs;