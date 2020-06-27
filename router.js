const index = require("./src/index");

let router= function(url,res){
switch(url){
    case "/":
        index.homePage(res);
        break;
    case "/cartelera":
        index.cartelera(res);
        break;
    case "masvotadas":
        index.masVotadas();
        break;
    case "sucursales":
        index.sucursales();
        break;
    case "preguntas":
        index.preguntas();
        break
    case "contacto":
        index.contacto();
        break;
    default:
}
}
module.exports= router