# CRM GRAPHQL

## Instalar Apollo Server
npm i -D apollo-server
## Instalar Nodemon cambios reflejados en tiempo real
npm i -D nodemon
## Dependencia necesaria para que se ejecute el servidor de Apollo
npm install apollo-client apollo-cache-inmemory apollo-link-http react-apollo graphql-tag graphql --save
## ORM Mongoose y dotenv (Crear variables de entorno en desarrollo y producción)
npm i mongoose dotenv
## Hashear los password de los usuarios para que no sean visibles (encriptar)
pm i bcryptjs 