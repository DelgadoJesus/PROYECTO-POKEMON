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

router.post('/', async function(req, res, next) {
  ModalidadControllers.crear(req.body.Modalidad)
  res.send(await ModalidadControllers.todos());
});


router.post('/:id', async (req, res) => {
  const nuevaCategoria = req.body.nombre;
  res.send(await ModalidadControllers.categoria(req.params.id, nuevaCategoria));
});

/*Modificar*/
router.put('/:idModalidad/:idCategoria', async (req, res) => {
  const nuevoNombre = req.body.nombre;
  res.send(await ModalidadControllers.modificar(req.params.idModalidad, req.params.idCategoria, nuevoNombre));
});


/*DELETE*/
router.delete('/:idModalidad/:idCategoria', async (req, res) => {
  res.send(await ModalidadControllers.quitarcategoria(req.params.idModalidad, req.params.idCategoria));
});


module.exports = router;