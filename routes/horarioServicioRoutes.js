const express = require('express')
const router = express.Router()
const horarioServiciosController = require('../controllers/horarioServiciosController')

router.route('/')
    .get(horarioServiciosController.obtenerHorarios)
    .post(horarioServiciosController.crearNuevoHorario)
    .patch(horarioServiciosController.modificarHorario)
    .delete(horarioServiciosController.borrarHorario)

module.exports = router