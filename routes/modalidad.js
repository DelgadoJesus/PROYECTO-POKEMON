var express = require('express');
var router = express.Router();
var ModalidadControllers = require('../controllers/modalidad-c')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(ModalidadControllers.todos());
});

router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  res.send(ModalidadControllers.uno(id));
});

/*POST agregar*/
router.post('/', function(req, res, next) {
  ModalidadControllers.crear(req.body)
  res.send(ModalidadControllers.todos());
});

/*PUT agregar*/
router.put('/:id', function(req, res, next) {
  res.send(UsuariosController.modificar(req.params.id, req.body.nombre))
});

/*DELETE*/
router.delete('/:id', function(req, res, next) {
  res.send(UsuariosController.eliminar(req.params.id))
});


module.exports = router;