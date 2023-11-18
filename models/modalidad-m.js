const { v4: uuidv4 } = require('uuid');


let ModalidadBR = [
    {
        id : "011",
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
        id: "012",
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
        id:"013",
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
    async todos(){
        console.log("models/todos")
        return await ModalidadBR;
    }
    async uno(id){
        const modalidadEncontrada = ModalidadBR.find(mod => mod.id === id);
        return await modalidadEncontrada;
    }
    
    async crear(mod){
        ModalidadBR.push({
            id: uuidv4(),
            Modalidad: mod,
            catagorias: [] 
        })
        return await ModalidadBR;
    }

    async modificarCategoria(idModalidad, idCategoria, nuevoNombre) {
        const modalidad = ModalidadBR.find(mod => mod.id === idModalidad);
        if (modalidad) {
            const categoria = modalidad.catagorias.find(cat => cat.id === idCategoria);
            if (categoria) {
                categoria.nombre = nuevoNombre;
                return await ModalidadBR;
            }
        }
        return null; // En caso de no encontrar la modalidad o la categoría
    }

    async agregarCategoria(idModalidad, nuevaCategoria) {
        const modalidad = ModalidadBR.find(mod => mod.id === idModalidad);
        if (modalidad) {
          const nuevaCat = {
            id: uuidv4(),
            nombre: nuevaCategoria
          };
          modalidad.catagorias.push(nuevaCat);
          return await modalidad;
        }
        return null; // En caso de no encontrar la modalidad
      }

      async eliminarCategoria(idModalidad, idCategoria) {
        const modalidad = ModalidadBR.find(mod => mod.id === idModalidad);
        if (modalidad) {
          const categoriaIndex = modalidad.catagorias.findIndex(cat => cat.id === idCategoria);
          if (categoriaIndex !== -1) {
            modalidad.catagorias.splice(categoriaIndex, 1);
          }
        }
        return await ModalidadBR;
      }        
}

module.exports = new ModalidadModels();


