//Importamos el .env
require('dotenv').config();
//Los require van primero antes de las de terceros


//Llamamos al server, lo importamos server.js ya que lo hicimos con clases mas ordenado
const Server = require('./models/server')



//llamamos al servidor (server.js)
const server = new Server();

//Para levantar el servidor
server.listen();


