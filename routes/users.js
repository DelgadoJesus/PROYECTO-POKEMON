var express = require('express');
var router = express.Router();
var UsuariosController = require('../controllers/users-c')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(UsuariosController.todos());
});


/* POST crear usuario . */
router.post('/', function(req, res, next) {
    UsuariosController.crear(req.body)
    res.send(UsuariosController.todos());
});

/*PUT modificar*/
router.put('/user/:id', function(req, res, next) {
  res.status(200).send(_.pick(user, ['id', 'nombre']));
  res.send(UsuariosController.modificar(id, nombre))
});

// /*DELETE eliminar*/
// router.get('/', function(req, res, next) {
//   UsuariosController.crear(req.body)
//   res.send(UsuariosController.());
// });


module.exports = router;
