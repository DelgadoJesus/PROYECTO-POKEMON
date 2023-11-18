var express = require('express');
var router = express.Router();
var PatrocinantesController = require('../controllers/patrocinantes-c')

/* GET users listing. */
router.get('/', async function(req, res, next) {
    res.send(await PatrocinantesController.Patrocinantes());
});

router.get('/:id', async function(req, res, next) {
    let id = req.params.id;
    res.send(await PatrocinantesController.patrocinantesID(id));
  });



/*POST Ingresar*/
router.post('/', async function(req, res, next) {
    PatrocinantesController.ingresarPatrocinantes(req.body)
    res.send(await PatrocinantesController.Patrocinantes());
});


module.exports = router;