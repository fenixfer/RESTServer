//Aqui solo se crean funciones y se exportan

const { response } = require("express");

//TODO: LAS PROBAMOS EN POSTMAN
// Esto lo cambiamos this.app por router y como configuarmos en
// server.js no nesecitamos el /api -- this.app.get('/api', (req, res) => {
    //si ponemos res vscode no sabe que es entonces imporamots response o desctructuramos express
const usuariosGet = (req = request, res = response) => {

    //cuando en el get pedimos params como nombre?edad&color = 1234567890 entonces
    const {query, nombre = 'No name', apikey, page , limit} = req.query;

    //con send nos da un formato de texto
    //res.send('Iniciando');
    //lo cambiamos para formato de tipo json
    //TODO: No mandamos un texto sino un objeto entonces
    res.json({
        ok: true,
        msg: 'get API - controlador',

        query,
        nombre,
        apikey,
        page,
        limit
    });
};

//TODO: Pasamos los demás igual
const usuariosPut =  (req, res = response) => {
    //para hacerlo dinámico definimos una variable
    //si tendriamos mas entonces pusieramos mas entre corchetes { id, ...}
    const id = req.params.id;
    res.json({
        msg: 'put API - controlador',
        id
    });
}

const usuariosPost = (req, res = response) => {
    //TODO: Para reflejar la información de la API de Postmant creamos una constante
    //TODO: Esta información viene de request es de lo que esta solicitando la persona
    //Todo: Aquí se vienen los datos en bruto
    //const body = req.body;
    //Todo: Hacemos limpieza si solo queremos unos datos
    //Todo: Para eso desestructuramos lo que viene del JSON
    const {nombre,edad} = req.body;
    res.json({
        ok: true,
        msg: 'post API - controlador',
        //Todo: Entonces todo lo que sea del body lo reflejamos en la respuesta
        //body
        //Todo: Como desestructuramos entonces solo queremos lo que pedimos arriba
        nombre,
        edad
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'delete API - controlador'
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'patch API - controlador'
    });
}

module.exports = {
    //Como vamos a exportar varios controladores entonces se hace un objeto
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}