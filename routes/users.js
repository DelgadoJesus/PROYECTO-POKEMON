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

module.exports = router;
