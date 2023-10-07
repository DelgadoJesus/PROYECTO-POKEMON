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
    buscarUsuarioPorId(id){
        const usuarioEncontrado = usuarioDB.find(usuario => usuario.id === id);
            return usuarioEncontrado
    }

    crear(usuario){
        usuario.id = uuidv4();
        usuarioDB.push(usuario)
    }

    modificar(id, nuevoNombre) {    
        const usuario = usuarioDB.find(usuario => usuario.id === id); 
        if (usuario) {
        usuario.nombre = nuevoNombre; 
        return usuarioDB; 
    }}

    eliminar(id) {
        const usuarioEliminado = usuarioDB.filter(usuario => usuario.id !== id);
        return usuarioEliminado;
    }
}

module.exports = new UsuariosModels();