var express = require('express');
var router = express.Router();
var ModalidadControllers = require('../controllers/modalidad-c')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(ModalidadControllers.todos());
});

module.exports = router;