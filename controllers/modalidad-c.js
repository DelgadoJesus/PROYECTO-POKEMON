var modalidadModels = require('../models/modalidad-m')

class ModalidadControllers {
    todos(){
        return modalidadModels.todos();
    }
    obtenerModalidad(id){
       return modalidadModels.uno(id);
    }
    crear(mod){
        modalidadModels.crear(mod)

    }
    categoria(idModalidad, nuevaCategoria) {
        return modalidadModels.agregarCategoria(idModalidad, nuevaCategoria);
    }

    quitarcategoria(idModalidad, idCategoria){
        return modalidadModels.eliminarCategoria(idModalidad, idCategoria);
    }
}

module.exports = new ModalidadControllers();