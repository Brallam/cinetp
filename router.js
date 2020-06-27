const index = require("./src/index");

let router= function(url,res){
switch(url){
    case "/":
        index.homePage(res);
        break;
    case "/cartelera":
        index.cartelera(res);
        break;
    case "/masvotadas":
        index.masVotadas(res);
        break;
    case "/sucursales":
        index.sucursales(res);
        break;
    case "/preguntas":
        index.preguntas(res);
        break
    case "/contacto":
        index.contacto(res);
        break;
    default:
}
}
module.exports= router