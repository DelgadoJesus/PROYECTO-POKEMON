var PatrocinantesModels = require('../models/patrocinantes-m');

class PatrocinantesController{
    async Patrocinantes(){
        return await PatrocinantesModels.mostrarPatrocinantes(); 
    }
    async patrocinantesID(id){
        return await PatrocinantesModels.ObtenerPatrocinante(id);
    }
    ingresarPatrocinantes(patrocinante){
        return PatrocinantesModels.ingresarPatrocinantes(patrocinante);
    }
    modificar(idPatrocinante,nuevoNombre){
        return  PatrocinantesModels.modificarPatrocinante(idPatrocinante, nuevoNombre);
    }
    quitarPatrocinante(idPatrocinante){
        return PatrocinantesModels.eliminarPatrocinante(idPatrocinante);
    }
}

module.exports = new PatrocinantesController();