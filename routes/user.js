//Se configura mejor las rutas
//Destructuramos algo que viene de express
const { Router } = require('express');

//Estas son las rutas definidas como constantes
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/usuarios')

const router = Router();

//TODO: LAS PROBAMOS EN POSTMAN
// Esto lo cambiamos this.app por router y como configuarmos en
// server.js no nesecitamos el /api -- this.app.get('/api', (req, res) => {
//TODO: IMPORTAMOS LA RUTA DE USUARIOS QUE ES UNA CONSTANTE
//TODO: Importamos el archivo destructuramos la ruta y la llamamos
//TODO: Solo usuariosGet se pasa como referencia 
//TODO: GET: Obtener información del servidor, POST: Crear, PUT: Actualizar, Delete: Eliminar
router.get('/', usuariosGet);

//Para hacerlo dinámico ponemos : 
router.put('/:id', usuariosPut);

router.post('/', usuariosPost);

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);




module.exports = router;


