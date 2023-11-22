var express = require('express');
var router = express.Router();
var equiposControllers = require('../controllers/equipos-c')

/* GET users listing. */
router.get('/', async function(req, res, next) {
    res.send(await equiposControllers.todos());
});

router.get('/:id', async function(req, res, next) {
  let id = req.params.id;
  res.send(await equiposControllers.uno(id));
});


/* POST crear usuario . */
router.post('/', function(req, res, next) {
  const equipo_nombre = req.body.equipo_nombre; 
  const equipo_cat_id = req.body.equipo_cat_id;
  res.send(equiposControllers.crear(equipo_nombre, equipo_cat_id))
});

/*PUT modificar*/
router.put('/:id', (req, res) => {
  const nuevoNombre = req.body.equipo_nombre;
  const nuevaCat = req.body.equipo_cat_id;
  res.send(equiposControllers.modificar(req.params.id, nuevoNombre, nuevaCat));
});

/*DELETE eliminar*/
router.delete('/:id/',function(req, res, next) {
  res.send(equiposControllers.eliminar(req.params.id))
});



module.exports = router;
