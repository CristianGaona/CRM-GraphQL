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

   type Pedido{
       id: ID
       pedido: [PedidoGrupo]
       total: Float
       cliente: ID
       vendedor: ID
       creado: String
       estado: EstadoPedido

   }

   type PedidoGrupo{
       id: ID
       cantidad: Int
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
   }

   input ClienteInput{
       nombre: String!
       apellido: String!
       dni: String
       empresa: String!
       email: String!
       telefono: String
   }

   input PedidoInput{
       pedido: [PedidoProductoInput]
       total: Float!
       cliente: ID!
       estado: EstadoPedido
   }

   enum EstadoPedido{
       PENDIENTE
       COMPLETADO
       CANCELADO
   }

   input PedidoProductoInput{
       id: ID
       cantidad: Int
   }

   type Query{
       # Usuarios
       obtenerUsuario(token: String!) : Usuario

       # Productos
       obtenerProductos: [Producto]
       obtenerProducto(id:ID!): Producto

       # Clientes
       obtenerClientes: [Cliente]
       obtenerClienteVendedor:[Cliente]
       obtenerCliente (id: ID!): Cliente

       # Pedidos
       obtenerPedidos : [Pedido]
       obtenerPedidosProVendedor:[Pedido]
       obtenerPedido(id:ID!): Pedido
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
       actualizarCliente(id: ID!, input: ClienteInput): Cliente
       eliminarCliente(id: ID!): String

       #Pedidos
       nuevoPedido(input: PedidoInput): Pedido
       
   }
`;

// Exportar archivo para llamarlos dentro de otros directorios/archivos
module.exports = typeDefs;