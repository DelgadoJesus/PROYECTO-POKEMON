var UsuariosModels = require('../models/user-m')

class UsuariosController {
    todos(){
        return UsuariosModels.todos()
    }
    uno(id){

    }
    crear(usuario){
        UsuariosModels.crear(usuario)
    }
    modificar(id, nombre){
        return UsuariosModels.modificar(id, nombre)
    }
    eliminar(id){
        
    }
}

module.exports = new UsuariosController();