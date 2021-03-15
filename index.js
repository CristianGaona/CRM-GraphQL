// Importaciones
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');

// Servidor
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () =>{
        const miContext = "Hola";
        return{
            miContext
        }
    }
});

// Arrancar el servidor
server.listen().then(({ url }) => {
  console.log(`Servidor Listo en la URL ${url}`);
});
