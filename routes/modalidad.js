var express = require('express');
var router = express.Router();
var ModalidadControllers = require('../controllers/modalidad-c')

/* GET users listing. */
router.get('/',  function(req, res, next) {
  res.send( ModalidadControllers.todos());
});

router.get('/:id',  function(req, res, next) {
  let id = req.params.id;
  res.send( ModalidadControllers.obtenerModalidad(id));
});

// /*POST agregar*/
router.post('/', function(req, res, next) {

 ModalidadControllers.crear(req.body).then(()=>{
     console.log("then create")
     ModalidadControllers.todos()
     .then((resultados)=>{
        console.log("then todos");
        res.send(resultados)
      })
    })
});

/*Modificar*/
router.put('/:idModalidad', (req, res) => {
  const nuevoNombre = req.body.modalidad;
  res.send(ModalidadControllers.modificar(req.params.idModalidad, nuevoNombre));
});


/*DELETE*/
router.delete('/:idModalidad',(req, res) => {
  res.send(ModalidadControllers.quitarModalidad(req.params.idModalidad));
});



module.exports = router;