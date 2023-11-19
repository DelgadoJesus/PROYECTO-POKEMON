const { v4: uuidv4 } = require('uuid');
const db = require("../db");


class equiposModels {
    todos(){
        console.log("models/todos")

        return new Promise ((resolve, reject) =>(

            db.query('SELECT * FROM equiposdb', function (error, results, fields) {
                if (error) reject(error) ;
                resolve(results);
            })

         ));

    }
    buscarEquipoPorId(id){
        return new Promise ((resolve, reject) =>(

            db.query('SELECT * FROM equiposdb WHERE id = ?', id , function (error, results, fields) {
                if (error) reject(error) ;
                resolve(results);
            })
    
        ));

    }
    
    crear(equipo, cat){

        return new Promise ((resolve, reject) =>(

            db.query('INSERT INTO equiposdb SET ?', equipo, cat, function (error, results, fields) {
                if (error) reject(error) ;
                resolve(results);
            })
    
        ));

    }


    modificar(id, nuevoNombre, cat) {    
        return new Promise((resolve, reject) => {
            db.query('UPDATE equiposdb SET nombre = ? , categoria = ? WHERE id = ?', [nuevoNombre, cat,id], function (error, results, fields) {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    }

    eliminar(id) {
        const queryString = 'DELETE FROM equiposdb WHERE id = ?';
        return new Promise((resolve, reject) => {
            db.query(queryString, [id], (error, results, fields) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }
  }


module.exports = new equiposModels();