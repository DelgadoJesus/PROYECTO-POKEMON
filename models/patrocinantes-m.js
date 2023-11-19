const { v4: uuidv4 } = require('uuid');
const db = require("../db");


class PatrocinantesModels {
    mostrarPatrocinantes(){
        console.log("models/todos")

        return new Promise ((resolve, reject) =>(

            db.query('SELECT * FROM patrocinantes', function (error, results, fields) {
                if (error) reject(error) ;
                resolve(results);
            })
    
        ));

    }

    async ObtenerPatrocinante(id){
        return new Promise ((resolve, reject) =>(

            db.query('SELECT * FROM patrocinantes WHERE id = ?', id , function (error, results, fields) {
                if (error) reject(error) ;
                resolve(results);
            })
    
        ));

    }

    ingresarPatrocinantes(patrocinante){

        return new Promise ((resolve, reject) =>(

            db.query('INSERT INTO patrocinantes SET ?', patrocinante, function (error, results, fields) {
                if (error) reject(error) ;
                resolve();
            })
    
        ));

    }

    
    modificarPatrocinante(idPatrocinante, nuevoNombre) {
        return new Promise((resolve, reject) => {
            db.query('UPDATE patrocinantes SET nombre = ? WHERE id = ?', [nuevoNombre, idPatrocinante], function (error, results, fields) {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    }
    eliminarPatrocinante(idPatrocinante) {
        const queryString = 'DELETE FROM patrocinantes WHERE id = ?';
        return new Promise((resolve, reject) => {
            db.query(queryString, [idPatrocinante], (error, results, fields) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

}

module.exports = new PatrocinantesModels();