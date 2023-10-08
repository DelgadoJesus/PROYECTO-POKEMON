var express = require('express');
var router = express.Router();
var equiposControllers = require('../controllers/users-c')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send(equiposControllers.todos());
});

router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  res.send(equiposControllers.uno(id));
});


/* POST crear usuario . */
router.post('/', function(req, res, next) {
    equiposControllers.crear(req.body.nombre, req.body.categoria)
    res.send(equiposControllers.todos());
});

/*PUT modificar*/
router.put('/:id', function(req, res, next) {
  res.send(equiposControllers.modificar(req.params.id, req.body.nombre))
});

/*DELETE eliminar*/
router.delete('/:id/', function(req, res, next) {
  res.send(equiposControllers.eliminar(req.params.id))
});



module.exports = router;
