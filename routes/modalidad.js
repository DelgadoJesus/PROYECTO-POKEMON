var express = require('express');
var router = express.Router();
var ModalidadControllers = require('../controllers/modalidad-c')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  res.send(await ModalidadControllers.todos());
});

router.get('/:id', async function(req, res, next) {
  let id = req.params.id;
  res.send(await ModalidadControllers.obtenerModalidad(id));
});

// /*POST agregar*/
router.post('/', function(req, res, next) {
  const modalidad = req.body.modalidad
  res.send(ModalidadControllers.crear(modalidad))
});


/*Modificar*/
router.put('/:idModalidad', (req, res) => {
  const modalidad = req.body.modalidad
  res.send(ModalidadControllers.modificar(req.params.idModalidad, modalidad));
});


/*DELETE*/
router.delete('/:idModalidad',(req, res) => {
  res.send(ModalidadControllers.quitarcategoria(req.params.idModalidad));
});



module.exports = router;