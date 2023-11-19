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
}

module.exports = new PatrocinantesController();