var modalidadModels = require('../models/modalidad-m')

class ModalidadControllers {
    todos(){
        return modalidadModels.todos();
    }
    obtenerModalidad(id){
       return modalidadModels.uno(id);
    }
    crear(mod){
        return modalidadModels.crear(mod)
    }
    modificar(idModalidad,nuevoNombre,cat){
        return  modalidadModels.modificarModalidad(idModalidad, nuevoNombre,cat);
    }
    quitarModalidad(idModalidad){
        return modalidadModels.eliminarModalidad(idModalidad);
    }
}

module.exports = new ModalidadControllers();