


// Resolvers
// 1. _ objetos retornados por el resolver padre (consultas anidadas)
// 2. {input} argumentos
// 3. context (ctx) objeto que se comparte entre todos los resolvers
// 4. infotmación (info) sobre la consulta actual
const resolvers = {
    Query: {
      obtenerCurso: () => "Hola"
    }
  };

module.exports = resolvers;