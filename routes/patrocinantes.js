var express = require('express');
var router = express.Router();
var PatrocinantesController = require('../controllers/patrocinantes-c')
const checkAdmin = require("../auth/checkAdmin");

/* GET users listing. */
router.get('/', checkAdmin, async function(req, res, next) {
    res.send(await PatrocinantesController.Patrocinantes());
});

router.get('/:id', checkAdmin, async function(req, res, next) {
    let id = req.params.id;
    res.send(await PatrocinantesController.patrocinantesID(id));
  });



/*POST Ingresar*/
router.post('/', checkAdmin, function(req, res, next) {


   PatrocinantesController.ingresarPatrocinantes(req.body).then(()=>{
       console.log("then create")
       PatrocinantesController.Patrocinantes().then((resultados)=>{
          console.log("then todos");
          res.send(resultados)
        })
      })
  });
  
    //MODIFICAR
    router.put('/:idPatrocinante', checkAdmin,(req, res) => {
      const nuevoNombre = req.body.nombre;
      res.send(PatrocinantesController.modificar(req.params.idPatrocinante, nuevoNombre));
    });
    /*DELETE*/
    router.delete('/:idPatrocinante', checkAdmin,(req, res) => {
      res.send(PatrocinantesController.quitarPatrocinante(req.params.idPatrocinante));
    });
module.exports = router;