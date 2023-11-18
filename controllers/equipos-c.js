var equiposModels = require('../models/equipos-m')

class equiposControllers {
    async todos(){
        return await equiposModels.todos()
    }
    async uno(id){
        return await equiposModels.buscarEquipoPorId(id)
    }
    async crear(equipo, cat){
       await equiposModels.crear(equipo, cat)
    }
    async modificar(id, nuevoNombre){
        return await equiposModels.modificar(id, nuevoNombre)
    }
    async eliminar(id){
        return await equiposModels.eliminar(id)
    }
}

module.exports = new equiposControllers();