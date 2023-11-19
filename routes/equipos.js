var express = require('express');
var router = express.Router();
var equiposControllers = require('../controllers/equipos-c')

/* GET users listing. */
router.get('/',  function(req, res, next) {
    res.send( equiposControllers.todos());
});

router.get('/:id',  function(req, res, next) {
  let id = req.params.id;
  res.send( equiposControllers.uno(id));
});


/* POST crear usuario . */
router.post('/', function(req, res, next) {

 equiposControllers.crear(req.body).then(()=>{
     console.log("then create")
     equiposControllers.todos().then((resultados)=>{
        console.log("then todos");
        res.send(resultados)
      })
    })
});

/*PUT modificar*/
router.put('/:id', (req, res) => {
  const nuevoNombre = req.body.nombre;
  const nuevaCat = req.body.categoria;
  res.send(equiposControllers.modificar(req.params.id, nuevoNombre, nuevaCat));
});

/*DELETE eliminar*/
router.delete('/:id/',function(req, res, next) {
  res.send(equiposControllers.eliminar(req.params.id))
});



module.exports = router;
