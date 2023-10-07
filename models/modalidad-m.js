const { v4: uuidv4 } = require('uuid');

let ModalidadBR = [
    {
        modalidad:"Batalla de Robots"
    },
    {
        modalidad:"Vehiculos Autonomos"
    },
    {
        modalidad:"Soluciones Industriales"
    }

]

class ModalidadModels {
    todos(){
        console.log("models/todos")
        return ModalidadBR;
    }
    uno(id){

    }
    crear(modo){
        modo.id = uuidv4();
        ModalidadBR.push(modo)
   
    }
}

module.exports = new ModalidadModels();


