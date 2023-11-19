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

  //equiposControllers.crear(req.body.equipos)
  //res.send(await equiposControllers.todos());
 equiposControllers.crear(req.body).then(()=>{
     console.log("then create")
     equiposControllers.todos().then((resultados)=>{
        console.log("then todos");
        res.send(resultados)
      })
    })
});

/*PUT modificar*/
router.put('/:id', async function(req, res, next) {
  res.send(await equiposControllers.modificar(req.params.id, req.body.nombre))
});

/*DELETE eliminar*/
router.delete('/:id/', async function(req, res, next) {
  res.send(await equiposControllers.eliminar(req.params.id))
});



module.exports = router;
