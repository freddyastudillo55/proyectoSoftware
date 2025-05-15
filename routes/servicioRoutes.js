const express = require('express')
const router = express.Router()
const serviciosController = require('../controllers/serviciosController')

router.route('/')
    .get(serviciosController.obtenerServicios)
    .post(serviciosController.crearNuevoServicio)
    .patch(serviciosController.modificarServicio)
    .delete(serviciosController.borrarServicio)

module.exports = router