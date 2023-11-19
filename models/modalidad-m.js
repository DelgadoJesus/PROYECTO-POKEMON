const { v4: uuidv4 } = require('uuid');
const db = require("../db");


class ModalidadModels {
    todos(){
        console.log("models/todos")

        return new Promise ((resolve, reject) =>(

            db.query('SELECT * FROM modalidad', function (error, results, fields) {
                if (error) reject(error) ;
                resolve(results);
            })
    
        ));

    }




    async uno(id){
        const modalidadEncontrada = ModalidadBR.find(mod => mod.id === id);
        return await modalidadEncontrada;
    }
    
    crear(mod){

        return new Promise ((resolve, reject) =>(

            db.query('INSERT INTO modalidad SET ?', mod, function (error, results, fields) {
                if (error) reject(error) ;
                resolve();
            })
    
        ));

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


