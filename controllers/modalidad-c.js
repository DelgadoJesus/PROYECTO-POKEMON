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
}

module.exports = new ModalidadControllers();