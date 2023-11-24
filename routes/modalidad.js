var express = require('express');
var router = express.Router();
var ModalidadControllers = require('../controllers/modalidad-c')
const checkLogin = require("../auth/checkLogin");
const checkAdmin = require("../auth/checkAdmin");


/* GET users listing. */
router.get('/', checkAdmin,async function(req, res, next) {
  res.send(await ModalidadControllers.todos());
});

router.get('/:id', checkAdmin,async function(req, res, next) {
  let id = req.params.id;
  res.send(await ModalidadControllers.obtenerModalidad(id));
});

// /*POST agregar*/
router.post('/', checkLogin,function(req, res, next) {
  const modalidad = req.body.modalidad
  res.send(ModalidadControllers.crear(modalidad))
});


/*Modificar*/
router.put('/:idModalidad', checkAdmin,(req, res) => {
  const modalidad = req.body.modalidad
  res.send(ModalidadControllers.modificar(req.params.idModalidad, modalidad));
});


/*DELETE*/
router.delete('/:idModalidad',checkAdmin,(req, res) => {
  res.send(ModalidadControllers.quitarcategoria(req.params.idModalidad));
});



module.exports = router;