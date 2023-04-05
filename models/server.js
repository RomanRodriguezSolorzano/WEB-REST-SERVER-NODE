const express = require('express');
//const cors = require('cors');
class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/user';
        // middleware
        this.middlewares();
        // rutas
        this.routes();
    }

    middlewares(){
        /* Cors */
        //this.app.use(cors);

        /* Directorio publico */
        this.app.use(express.static('public'));

        /* Recibir informacion con metodo POST por medio de JSON */
        /* Lectura y parseo del body */
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.userPath, require('../routes/user'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('El servidor esta corriendo en localhost:',this.port);
        });
    }

}

module.exports = Server;