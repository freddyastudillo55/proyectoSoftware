const express = require('express')
const router = express.Router()
const usuariosController = require('../controllers/usuariosController')

router.route('/')
    .get(usuariosController.obtenerUsuarios)
    .post(usuariosController.crearUsuario)
    .patch(usuariosController.modificarUsuario)
    .delete(usuariosController.borrarUsuario)

module.exports = router