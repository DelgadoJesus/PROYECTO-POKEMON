const { v4: uuidv4 } = require('uuid');

let equiposDB = [
    {
        id: "123",
        nombre:"Equipo Delta",
        categoria: "Modalidad Sumo"
    },
    {
        id: "343",
        nombre:"Daniel",
        categoria: "Modalidad Sumo"   
    },
    {
        id: "576",
        nombre:"Aaron",   
        categoria: "Modalidad Incapacidad" 
    },
    {
        id: "123",
        nombre:"Adrian",   
        categoria: "Modalidad Incapacidad" 
    }
]

class equiposModels {
    todos(){
        console.log("models/todos")
        return equiposDB;
    }
    buscarEquipoPorId(id){
        const equiposEncontrados = equiposDB.find(equipos => equipos.id === id);
            return equiposEncontrados
    }

    crear(equipo, cat){
        equiposDB.push({ 
            id:uuidv4(),
            nombre: equipo,
            categoria: cat
        })
    }

    modificar(id, nuevoNombre) {    
        const equipos = equiposDB.find(equipos => equipos.id === id); 
        if (equipos) {
        equipos.nombre = nuevoNombre; 
        return equiposDB; 
    }}

    eliminar(id) {
        const equiposEliminado = equiposDB.filter(equipos => equipos.id !== id);
        return equiposEliminado;
    }
}

module.exports = new equiposModels();