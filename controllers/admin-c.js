const { token } = require('morgan')
var adminsModels = require('../models/admin-m')

class adminControllers {
    async todos(){
        return await adminsModels.todos()
    }
    async uno(id){
        return await adminsModels.buscarAdminPorId(id)
    }
    crear(usuario){
     adminsModels.crear(usuario)
    }
    registro(usuario){
        return new Promise((resolve, reject)=>{
            adminsModels.registro(usuario).then((token)=>{
                resolve(token)
            })
        })
    }
    login(usuario){
        return new Promise((resolve, reject)=>{
            adminsModels.login(usuario).then((token)=>{
                resolve(token)
            })
            .catch((e)=>{
                reject(e)
            })
        })
    }
    modificar(id, nuevoNombre){
        return adminsModels.modificar(id, nuevoNombre)
    }
}

module.exports = new adminControllers()