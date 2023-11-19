var equiposModels = require('../models/equipos-m')

class equiposControllers {
    todos(){
        return equiposModels.todos()
    }
    uno(id){
        return equiposModels.buscarEquipoPorId(id)
    }
    crear(equipo, cat){
     equiposModels.crear(equipo, cat)
    }
    modificar(id, nuevoNombre, cat){
        return equiposModels.modificar(id, nuevoNombre, cat)
    }
    eliminar(id){
        return equiposModels.eliminar(id)
    }
}

module.exports = new equiposControllers();