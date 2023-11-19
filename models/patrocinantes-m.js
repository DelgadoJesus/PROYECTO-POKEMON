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
        const patrocinioEncontrado = patrocinanteDB.find(patrocinante => patrocinante.id === id); 
        return await patrocinioEncontrado;
    }
    ingresarPatrocinantes(patrocinante){

        return new Promise ((resolve, reject) =>(

            db.query('INSERT INTO patrocinantes SET ?', patrocinante, function (error, results, fields) {
                if (error) reject(error) ;
                resolve();
            })
    
        ));

    }

}

module.exports = new PatrocinantesModels();