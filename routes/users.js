var express = require('express');
var router = express.Router();
var UsuariosController = require('../controllers/users-c')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send(UsuariosController.todos());
});

router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  res.send(UsuariosController.uno(id));
});


/* POST crear usuario . */
router.post('/', function(req, res, next) {
    UsuariosController.crear(req.body)
    res.send(UsuariosController.todos());
});

/*PUT modificar*/
router.put('/:id', function(req, res, next) {
  res.send(UsuariosController.modificar(req.params.id, req.body.nombre))
});

/*DELETE eliminar*/
router.delete('/:id', function(req, res, next) {
  res.send(UsuariosController.eliminar(req.params.id))
});



module.exports = router;
