const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const saltRounds = 10;
const { v4: uuidv4 } = require('uuid');
const db = require("../db");


class adminsModels {
    todos(){
        console.log("models/todos")

        return new Promise ((resolve, reject) =>(

            db.query('SELECT * FROM admins', function (error, results, fields) {
                if (error) reject(error) ;
                resolve(results);
            })

         ));

    }

    buscarAdminPorId(id){
        return new Promise ((resolve, reject) =>(

            db.query('SELECT * FROM admins WHERE id_admin = ?', id , function (error, results, fields) {
                if (error) reject(error) ;
                resolve(results);
            })
    
        ));

    }
    
    crear(usuario){

        return new Promise ((resolve, reject) =>(

            db.query('INSERT INTO admins SET admin_nombre = ?', [usuario], function (error, results, fields) {
                if (error) reject(error) ;
                resolve(results);
            })
    
        ));

    }

    registro(usuario){

        return new Promise ((resolve, reject) =>{

            usuario.clave_admin = bcrypt.hashSync(usuario.clave_admin , saltRounds);

            db.query('INSERT admins SET ?', usuario, function (error, results, fields) {
                if (error) reject(error) ;
                resolve(results);
            })
    
        });

    }

    login(usuario){

        return new Promise ((resolve, reject) =>{
            db.query('SELECT * FROM admins WHERE cedula_admin = ?', [usuario.cedula_admin], function (error, results, fields) {
                if (error) reject(error);
                console.log(results[0].clave_admin, usuario.clave_admin)
                if (results) {
                    if (bcrypt.compareSync(usuario.clave_admin, results[0].clave_admin)) {
                        var token = jwt.sign({ nombre_admin: results[0].usuario }, process.env.JWT_SECRET7);
                        resolve(token);
                    } else {
                        reject('Clave Errada')
                    }
                }   else {
                    reject('')
                }
            }); 

        })

    }

    modificar(id, nuevoNombre) {    
        return new Promise((resolve, reject) => {
            db.query('UPDATE admins SET nombre_admin = ? , WHERE id_admin = ?', [nuevoNombre, id], function (error, results, fields) {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    }
}

module.exports = new adminsModels();