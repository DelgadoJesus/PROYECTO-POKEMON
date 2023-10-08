var express = require('express');
var router = express.Router();
var ModalidadControllers = require('../controllers/modalidad-c')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(ModalidadControllers.todos());
});

router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  res.send(ModalidadControllers.obtenerModalidad(id));
});

// /*POST agregar*/

router.post('/', function(req, res, next) {
  ModalidadControllers.crear(req.body.Modalidad)
  res.send(ModalidadControllers.todos());
});


router.post('/:id', (req, res) => {
  const nuevaCategoria = req.body.nombre;
  res.send(ModalidadControllers.categoria(req.params.id, nuevaCategoria));
});


/*DELETE*/
router.delete('/:idModalidad/:idCategoria', (req, res) => {
  res.send(ModalidadControllers.quitarcategoria(req.params.idModalidad, req.params.idCategoria));
});


module.exports = router;