const { v4: uuidv4 } = require('uuid');
const db = require("../db");


class ModalidadModels {
    todos(){
        console.log("models/todos")

        return new Promise ((resolve, reject) =>(

            db.query('SELECT * FROM modalidades', function (error, results, fields) {
                if (error) reject(error) ;
                resolve(results);
            })
    
        ));

    }




    async uno(id){
        return new Promise ((resolve, reject) =>(

            db.query('SELECT * FROM modalidades WHERE modalidad_id = ?', id , function (error, results, fields) {
                if (error) reject(error) ;
                resolve(results);
            })
    
        ));

    }
    
    crear(mod){

        return new Promise ((resolve, reject) =>(

            db.query('INSERT INTO modalidades SET modalidad = ?', mod, function (error, results, fields) {
                if (error) reject(error) ;
                resolve(results);
            })
    
        ));

    }

    modificarModalidad(idModalidad, nuevoNombre) {
        return new Promise((resolve, reject) => {
            db.query('UPDATE modalidades SET modalidad = ? WHERE modalidad_id = ?', [nuevoNombre, idModalidad], function (error, results, fields) {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
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

      eliminarCategoria(idModalidad) {
        const queryString = 'DELETE FROM modalidades WHERE modalidad_id = ?';
        return new Promise((resolve, reject) => {
            db.query(queryString, [idModalidad], (error, results, fields) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }
}

module.exports = new ModalidadModels();


