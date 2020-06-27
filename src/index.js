const homePage= require("./homePage");
const  listarPelis  = require("./homePage");
const cartelera=require("./cartelera.js")
const masVotadas=require("./masVotadas");

let index = {
    homePage:function(res){
        res.write(homePage.titulo);
        res.write("\n")
        res.write("Total: " + homePage.cantidad()+"\n")
        let titulos=homePage.listarPelis()
        let i=0
        for (sda of titulos){
            i++
            res.write(i+":"+sda)
            res.write("\n")
        }
        res.write("\n Recorda que podes acceder a las siguientes secciones")
        res.write("\n")
        res.write(
                  `-Cartelera
                   -Mas votadas
                   -Sucursales
                   -Preguntas
                   -Contacto 
        `)
        res.end();
    },
    cartelera:function(res){
        res.write(cartelera.titulo+"\n")
        let tituloc=cartelera.lista()
        let= i=0;
        tituloc.forEach(function(m){
            i++
        res.write(""+i+"--"+m.title+":\n")
        res.write("Reseña:"+m.overview+"\n")
        res.write("-------------------------------------------------------------------------------------------------------------------------------------------------\n")
        });
         
        res.end()
    },
    masVotadas:function(res){
        res.write(""+masVotadas.titulo+"\n")
        res.write("Cantidad:"+masVotadas.listado().length+"\n")
       let lista=masVotadas.listado()
       let i=0
       lista.forEach(function(m){
        i++
       res.write(""+i+"--"+m.title+":\n")
       res.write("Voto:"+m.vote_average+"\n") 
       res.write("Reseña:"+m.overview+"\n")
       res.write("-----------------------------------------------------------------------------------------------------------------------------------------------------\n")
       })
  
        res.end()
        },
        
    sucursales:function(){

    },
    contacto:function(){

    },
    preguntas:function(){

    }
} 
module.exports=index