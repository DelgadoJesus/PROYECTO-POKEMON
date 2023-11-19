var PatrocinantesModels = require('../models/patrocinantes-m');

class PatrocinantesController{
    Patrocinantes(){
        return PatrocinantesModels.mostrarPatrocinantes(); 
    }
    patrocinantesID(id){
        return PatrocinantesModels.ObtenerPatrocinante(id);
    }
    ingresarPatrocinantes(patrocinante){
        return PatrocinantesModels.ingresarPatrocinantes(patrocinante);
    }
}

module.exports = new PatrocinantesController();