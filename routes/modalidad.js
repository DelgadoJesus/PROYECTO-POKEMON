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
router.post('/', function(req, res, next) {

  //ModalidadControllers.crear(req.body.Modalidad)
  //res.send(await ModalidadControllers.todos());
 ModalidadControllers.crear(req.body).then(()=>{
     console.log("then create")
     ModalidadControllers.todos()
     .then((resultados)=>{
        console.log("then todos");
        res.send(resultados)
      })
    })
});


router.post('/:id', (req, res) => {
  const nuevaCategoria = req.body.nombre;
  res.send(ModalidadControllers.categoria(req.params.id, nuevaCategoria));
});

/*Modificar*/
router.put('/:idModalidad', (req, res) => {
  const nuevoNombre = req.body.modalidad;
  res.send(ModalidadControllers.modificar(req.params.idModalidad, nuevoNombre));
});


/*DELETE*/
router.delete('/:idModalidad',(req, res) => {
  res.send(ModalidadControllers.quitarcategoria(req.params.idModalidad));
});



module.exports = router;