var express = require('express');
var router = express.Router();
var adminControllers = require('../controllers/admin-c');
const checkadmin = require("../auth/auth");

/* GET admin listing. */
router.get('/', checkadmin, async function(req, res, next) {
    res.send(await adminControllers.todos());
});

/* POST crear usuario . */
router.post('/', function(req, res, next) {
  const usuario_nombre = req.body.usuario_nombre;
  res.send(adminControllers.crear(usuario_nombre))
});

/*POST ingresar contraseña a usuario*/
router.post('/registro', function(req, res, next) {
    adminControllers.registro(req.body).then((token)=>{
        res.send(token)
    })
})

/*POST login a usuario*/
router.post('/login', function(req, res, next) {
    adminControllers.login(req.body).then((token)=>{
        res.send(token)
    })
    .catch((error)=>{
        res.send(error)
    })
});

/*PUT modificar*/
router.put('/:id', (req, res) => {
    const nuevoNombre = req.body.nombre_admin;
    res.send(adminControllers.modificar(req.params.id, nuevoNombre));
  });

module.exports = router;