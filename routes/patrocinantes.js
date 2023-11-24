var express = require('express');
var router = express.Router();
var PatrocinantesController = require('../controllers/patrocinantes-c')
const checkadmin = require("../auth/auth");

/* GET users listing. */
router.get('/', checkadmin, async function(req, res, next) {
    res.send(await PatrocinantesController.Patrocinantes());
});

router.get('/:id', checkadmin, async function(req, res, next) {
    let id = req.params.id;
    res.send(await PatrocinantesController.patrocinantesID(id));
  });



/*POST Ingresar*/
router.post('/', checkadmin, function(req, res, next) {


   PatrocinantesController.ingresarPatrocinantes(req.body).then(()=>{
       console.log("then create")
       PatrocinantesController.Patrocinantes().then((resultados)=>{
          console.log("then todos");
          res.send(resultados)
        })
      })
  });
  
    //MODIFICAR
    router.put('/:idPatrocinante', checkadmin,(req, res) => {
      const nuevoNombre = req.body.nombre;
      res.send(PatrocinantesController.modificar(req.params.idPatrocinante, nuevoNombre));
    });
    /*DELETE*/
    router.delete('/:idPatrocinante', checkadmin,(req, res) => {
      res.send(PatrocinantesController.quitarPatrocinante(req.params.idPatrocinante));
    });
module.exports = router;