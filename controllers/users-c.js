var UsuariosModels = require('../models/user-m')

class UsuariosController {
    todos(){
        return UsuariosModels.todos()
    }
    uno(id){
        return UsuariosModels.buscarUsuarioPorId(id)
    }
    crear(usuario){
        UsuariosModels.crear(usuario)
    }
    modificar(id, nuevoNombre){
        return UsuariosModels.modificar(id, nuevoNombre)
    }
    eliminar(id){
        return UsuariosModels.eliminar(id)
    }
}

module.exports = new UsuariosController();