const { v4: uuidv4 } = require('uuid');

let patrocinanteDB = [
    {
        id:"895",
        patrocinio:"KEL"
    },
    {
        id:"754",
        patrocinio:"Makroval"
    },
    {
        id:"245",
        patrocinio:"H&B BINTEL"
    },
    {
        id:"486",
        patrocinio:"SALEPOINT SOFTWARE"
    },
    {
        id:"387",
        patrocinio:"HAE"
    },
    {
        id:"176",
        patrocinio:"Inpro Andes"
    },
    {
        id:"675",
        patrocinio:"AVR"
    },
    {
        id:"479",
        patrocinio:"Gourmet La Pureza del Grano"
    },
    {
        id:"276",
        patrocinio:"Avila Gestion Profesional de Salud"
    }
]

class PatrocinantesModels {
    mostrarPatrocinantes(){
        console.log('models/todos')
        return patrocinanteDB;
    }
    ObtenerPatrocinante(id){
        const patrocinioEncontrado = patrocinanteDB.find(patrocinante => patrocinante.id === id); 
        return patrocinioEncontrado;
    }
    ingresarPatrocinantes(patrocinante){
        patrocinante.id = uuidv4();
        patrocinanteDB.push(patrocinante)
    }
}

module.exports = new PatrocinantesModels();