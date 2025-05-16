const express = require('express')
const router = express.Router()
const citasController = require('../controllers/citasController')

router.route('/')
    .get(citasController.obtenerCitas)
    .post(citasController.crearNuevaCita)
    .patch(citasController.modificarCita)
    .delete(citasController.borrarCita)

module.exports = router