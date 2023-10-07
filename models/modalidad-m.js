const { v4: uuidv4 } = require('uuid');

let ModalidadBR = [
    {
        modalidad:"Batalla de Robots",
        catagorias: [
            {
                id: "1",
                nombre: "Modalidad sumo"
            },
            {
                id: "2",
                nombre: "Modalidad incapacidad"
            }
        ]
    },
    {
        modalidad:"Vehiculos Autonomos",
        catagorias: [
            {
                id: "3",
                nombre: "Recoleccion de objetos"
            },
            {
                id: "4",
                nombre: "Seguidor de linea"
            }
        ]
    },
    {
        modalidad:"Soluciones Industriales",
        catagorias: [
            {
                id: "5",
                nombre: "El objetivo"
            },
            {
                id: "6",
                nombre: "El Problema"
            }
        ]
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


