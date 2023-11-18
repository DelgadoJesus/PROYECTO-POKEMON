// Importaciones necesarias
const express = require('express');
const router = express.Router();

// Suponiendo que tienes controladores para manejar estas rutas
const {
    obtenerEquipo,
    obtenerEquiposPorModalidad,
    actualizarPatrocinante
} = require('./controladores');

// Obtener detalles de un equipo específico
router.get('/equipos/:id', obtenerEquipo); // en obtenerEquipos debe ir el nombre que le dieron al conrolador sea cual sea el nombre que le dieron

// Obtener equipos por modalidad
router.get('/modalidades/:id/equipos', obtenerEquiposPorModalidad);

// Actualizar detalles de un patrocinante
router.put('/patrocinantes/:id', actualizarPatrocinante);

module.exports = router;