const express = require('express')
const cors = require('cors')


class Server {

    constructor(){
        this.app = express();
        //para hacer visible al mundo el puerto
        this.port = process.env.PORT;

        //Para que el usuario vea que rutas dispone
        this.usuariosPath = '/api/usuarios';

        // Middlewares SON FUIONCES QUE AÑADEN OTRAS FUNCIONALIDAD A NUESTRO WEBSERVER
        //ES UNA FUNCÓN QUE SIEMPRE SE EJECUTARA CUANDO SE LEVANTA EL SERVIDOR
        this.middlewares();

        //Rutas de mi aplicación
        //constructor dispara las rutas
        this.routes();
    }

    middlewares(){
        //Ponemos el cors porque es un middelwares para proteger las API's o rutas
        //CORS
        this.app.use( cors() );

        //middleware del post que se hizo con json
        //Todo: Cualquier información que venga de POS,PUT o DELETE la intenta serializar en formato json
        this.app.use(express.json());

        //la palabra use es para usar middlewares
        //TODO: ESTO SE VA A SERVIR EN EL PATT DE ROUTES DONDE DICE INICIANDO
        //TODO: Para ver lo de abajo del path en el slash / ponemos el endpoint api /api
        this.app.use(express.static('public'));
    }

    routes() {
        
        //Configuramos las rutas de router user.js
        //El primer path es el que ocupamos lo definimos arriba
        this.app.use(this.usuariosPath, require('../routes/user'));
    }

    //nuevo método
    listen(){
        //Cambiamos el puerto por esto del archivo .env
        //llamamos al this.port
        this.app.listen( this.port , () => {
            console.log('Servidor corriendo en puerto', this.port);
        });

    }

}


module.exports = Server;