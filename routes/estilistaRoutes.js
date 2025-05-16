const express = require('express')
const router = express.Router()
const estilistasController = require('../controllers/estilistasController')

router.route('/')
    .get(estilistasController.obtenerEstilistas)
    .post(estilistasController.crearNuevoEstilista)
    .patch(estilistasController.modificarEstilista)
    .delete(estilistasController.borrarEstilista)

module.exports = router