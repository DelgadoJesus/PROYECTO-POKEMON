var express = require('express');
var router = express.Router();
var PatrocinantesController = require('../controllers/patrocinantes-c')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send(PatrocinantesController.Patrocinantes());
});

router.get('/:id', function(req, res, next) {
    let id = req.params.id;
    res.send(PatrocinantesController.patrocinantesID(id));
  });



/*POST Ingresar*/
router.post('/', function(req, res, next) {
    PatrocinantesController.ingresarPatrocinantes(req.body)
    res.send(PatrocinantesController.Patrocinantes());
});


module.exports = router;