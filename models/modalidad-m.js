const { v4: uuidv4 } = require('uuid');

let ModalidadBR = [
    {
        id : "M1",
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
        id: "M2",
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
        id:"M3",
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
        const modalidadEncontrada = ModalidadBR.find(mod => mod.id === id);
        return modalidadEncontrada;
    }
    crear(mod){
        mod.id = uuidv4();
        ModalidadBR.push(mod)
    }
}

module.exports = new ModalidadModels();


