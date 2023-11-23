const { token } = require('morgan')
var usuariosModels = require('../models/usuarios-m')

class UsuariosControllers {
    async todos(){
        return await usuariosModels.todos()
    }
    async uno(id){
        return await usuariosModels.buscarUsuarioPorId(id)
    }
    crear(usuario){
     usuariosModels.crear(usuario)
    }
    registro(usuario){
        return new Promise((resolve, reject)=>{
            usuariosModels.registro(usuario).then((token)=>{
                resolve(token)
            })
        })
    }
    login(usuario){
        return new Promise((resolve, reject)=>{
            usuariosModels.login(usuario).then((token)=>{
                resolve(token)
            })
            .catch((e)=>{
                reject(e)
            })
        })
    }
    modificar(id, nuevoNombre){
        return usuariosModels.modificar(id, nuevoNombre)
    }
}

module.exports = new UsuariosControllers();