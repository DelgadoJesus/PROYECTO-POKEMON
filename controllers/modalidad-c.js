var modalidadModels = require('../models/modalidad-m')

class ModalidadControllers {
    async todos(){
        return await modalidadModels.todos();
    }
    async obtenerModalidad(id){
       return await modalidadModels.uno(id);
    }
    crear(mod){
        modalidadModels.crear(mod)
    }
    modificar(idModalidad,nuevoNombre,cat){
        return  modalidadModels.modificarModalidad(idModalidad, nuevoNombre,cat);
    }
    async categoria(idModalidad, nuevaCategoria) {
        return await modalidadModels.agregarCategoria(idModalidad, nuevaCategoria);
    }

    quitarcategoria(idModalidad){
        return modalidadModels.eliminarCategoria(idModalidad);
    }
}

module.exports = new ModalidadControllers();