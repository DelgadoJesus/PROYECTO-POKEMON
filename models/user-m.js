const { v4: uuidv4 } = require('uuid');

let usuarioDB = [
    {
        id: "123",
        nombre:"Jesús"   
    },
    {
        id: "343",
        nombre:"Daniel"   
    },
    {
        id: "576",
        nombre:"Aaron"   
    },
    {
        id: "123",
        nombre:"Adrian"   
    }
]

class UsuariosModels {
    todos(){
        console.log("models/todos")
        return usuarioDB;
    }
    uno(id){

    }
    crear(usuario){
        usuario.id = uuidv4();
        usuarioDB.push(usuario)
    }
    modificar(id, nombre){
       console.log(id, nombre)
    }
    eliminar(id){
        
    }
}

module.exports = new UsuariosModels();