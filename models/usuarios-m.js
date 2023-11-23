const bcrypt = require('bcrypt');
const saltRounds = 10;
const { v4: uuidv4 } = require('uuid');
const db = require("../db");


class usuariosModels {
    todos(){
        console.log("models/todos")

        return new Promise ((resolve, reject) =>(

            db.query('SELECT * FROM usuarios', function (error, results, fields) {
                if (error) reject(error) ;
                resolve(results);
            })

         ));

    }

    buscarUsuarioPorId(id){
        return new Promise ((resolve, reject) =>(

            db.query('SELECT * FROM usuarios WHERE usuarios_id = ?', id , function (error, results, fields) {
                if (error) reject(error) ;
                resolve(results);
            })
    
        ));

    }
    
    crear(usuario){

        return new Promise ((resolve, reject) =>(

            db.query('INSERT INTO usuarios SET usuarios_nombre = ?', [usuario], function (error, results, fields) {
                if (error) reject(error) ;
                resolve(results);
            })
    
        ));

    }

    registro(usuario){

        return new Promise ((resolve, reject) =>{
            console.log(usuario.clave)
            usuario.clave = bcrypt.hashSync(usuario.clave, saltRounds);
            console.log(usuario.clave)

            db.query('INSERT usuarios SET ?', [usuario], function (error, results, fields) {
                if (error) reject(error) ;
                resolve(results);
            })
    
        });

    }

    login(usuario){

        return new Promise ((resolve, reject) =>{
            db.query('SELECT * FROM usuarios WHERE id = ?', [usuario.id], function (error, results, fields) {
                if (error) reject(error);
                console.log(results[0],usuario.clave)
                if (results) {
                    if (bcrypt.compareSync(usuario.clave, results[0].clave)) {
                        resolve();

                    } else {
                        reject('Clave errada')
                    }
                }   else {
                    reject('')
                }

            });
    
        })

    }

    modificar(id, nuevoNombre) {    
        return new Promise((resolve, reject) => {
            db.query('UPDATE usuarios SET usuarios_nombre = ? , WHERE usuarios_id = ?', [nuevoNombre, id], function (error, results, fields) {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    }
}

module.exports = new usuariosModels();