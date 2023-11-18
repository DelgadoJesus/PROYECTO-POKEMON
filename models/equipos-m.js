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
    async todos(){
        console.log("models/todos")
        return await equiposDB;
    }
    async buscarEquipoPorId(id){
        const equiposEncontrados = equiposDB.find(equipos => equipos.id === id);
            return await equiposEncontrados
    }

    async crear(equipo, cat){
        equiposDB.push({ 
            id:uuidv4(),
            nombre: equipo,
            categoria: cat
        })
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