var express = require('express');
var router = express.Router();
var UsuariosControllers = require('../controllers/usuarios-c')

/* GET users listing. */
router.get('/', async function(req, res, next) {
    res.send(await UsuariosControllers.todos());
});

router.get('/:id', async function(req, res, next) {
  let id = req.params.id;
  res.send(await UsuariosControllers.uno(id));
});


/* POST crear usuario . */
router.post('/', function(req, res, next) {
  const usuario_nombre = req.body.usuario_nombre;
  res.send(UsuariosControllers.crear(usuario_nombre))
});

/*POST ingresar contraseña a usuario*/
router.post('/registro', function(req, res, next) {
    UsuariosControllers.registro(req.body).then((token)=>{
        res.send(token)
    })
})

/*POST login a usuario*/
router.post('/login', function(req, res, next) {
    UsuariosControllers.login(req.body).then((token)=>{
        res.send(token)
    })
    .catch((error)=>{
        res.send(error)
    })
})

/*PUT modificar*/
router.put('/:id', (req, res) => {
    const nuevoNombre = req.body.usuario_nombre;
    res.send(UsuariosControllers.modificar(req.params.id, nuevoNombre));
  });

module.exports = router;