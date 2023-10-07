var express = require('express');
var router = express.Router();
var PatrocinantesController = require('../controllers/patrocinantes-c')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send(PatrocinantesController.todos());
});

/*POST Ingresar*/
router.post('/', function(req, res, next) {
    PatrocinantesControllerController.crear(req.body)
    res.send(PatrocinantesControllerController.todos());
});


module.exports = router;