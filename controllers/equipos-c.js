var equiposModels = require('../models/equipos-m')

class equiposControllers {
    async todos(){
        return await equiposModels.todos()
    }
    async uno(id){
        return await equiposModels.buscarEquipoPorId(id)
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