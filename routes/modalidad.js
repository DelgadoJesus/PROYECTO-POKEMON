var express = require('express');
var router = express.Router();
var ModalidadControllers = require('../controllers/modalidad-c')
const checkadmin = require("../auth/auth");

/* GET users listing. */
router.get('/', checkadmin,async function(req, res, next) {
  res.send(await ModalidadControllers.todos());
});

router.get('/:id', checkadmin,async function(req, res, next) {
  let id = req.params.id;
  res.send(await ModalidadControllers.obtenerModalidad(id));
});

// /*POST agregar*/
router.post('/', checkadmin,function(req, res, next) {
  const modalidad = req.body.modalidad
  res.send(ModalidadControllers.crear(modalidad))
});


/*Modificar*/
router.put('/:idModalidad', checkadmin,(req, res) => {
  const modalidad = req.body.modalidad
  res.send(ModalidadControllers.modificar(req.params.idModalidad, modalidad));
});


/*DELETE*/
router.delete('/:idModalidad',checkadmin,(req, res) => {
  res.send(ModalidadControllers.quitarcategoria(req.params.idModalidad));
});



module.exports = router;