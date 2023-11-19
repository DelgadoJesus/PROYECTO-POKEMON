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
    async buscarEquipoPorId(id){
        const equiposEncontrados = equiposDB.find(equipos => equipos.id === id);
            return await equiposEncontrados
    }

    crear(equipo, cat){

        return new Promise ((resolve, reject) =>(

            db.query('INSERT INTO equiposdb SET ?', equipo, cat, function (error, results, fields) {
                if (error) reject(error) ;
                resolve(results);
            })
    
        ));

    }


    async modificar(id, nuevoNombre) {    
        const equipos = equiposDB.find(equipos => equipos.id === id); 
        if (equipos) {
        equipos.nombre = nuevoNombre; 
        return await equiposDB; 
    }}

    async eliminar(id) {
        const equiposEliminado = equiposDB.filter(equipos => equipos.id !== id);
        return await equiposEliminado;
    }
}

module.exports = new equiposModels();