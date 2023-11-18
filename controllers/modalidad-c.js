var modalidadModels = require('../models/modalidad-m')

class ModalidadControllers {
    async todos(){
        return await modalidadModels.todos();
    }
    async obtenerModalidad(id){
       return await modalidadModels.uno(id);
    }
    async crear(mod){
        await modalidadModels.crear(mod)
    }
    async modificar(idModalidad, idCategoria, nuevoNombre){
        return await modalidadModels.modificarCategoria(idModalidad, idCategoria, nuevoNombre);
    }
    async categoria(idModalidad, nuevaCategoria) {
        return await modalidadModels.agregarCategoria(idModalidad, nuevaCategoria);
    }

    async quitarcategoria(idModalidad, idCategoria){
        return await modalidadModels.eliminarCategoria(idModalidad, idCategoria);
    }
}

module.exports = new ModalidadControllers();