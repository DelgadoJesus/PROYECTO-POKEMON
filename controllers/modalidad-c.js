var modalidadModels = require('../models/modalidad-m')

class ModalidadControllers {
    todos(){
        return modalidadModels.todos();
    }
    uno(id){

    }
    crear(modo){

    }
}

module.exports = new ModalidadControllers();