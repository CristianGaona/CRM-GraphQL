const { gql } = require('apollo-server');

// Schema
const typeDefs = gql`

    type Curso{
        titulo: String
        tecnologia: String
    }
    type Tecnologia {
        tecnologia: String
    }

    type Query{
        obtenerCursos : [Curso]
        obtenerTecnologia : [Tecnologia]
    }
`;

// Exportar archivo para llamarlos dentro de otros directorios/archivos
module.exports = typeDefs;