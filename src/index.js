const homePage= require("./homePage");
const  listarPelis  = require("./homePage");
const cartelera=require("./cartelera.js")
const masVotadas=require("./masVotadas.js");
const sucursales=require("./sucursales.js");
const contacto = require("./contacto..js");
const faq=require("./preguntas")

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
        res.write("Promedio: "+masVotadas.promedio()+" \n")
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
        
    sucursales:function(res){
        res.write(""+sucursales.titulo)
        res.write(""+sucursales.listasalas().length+"\n")
        let salas=sucursales.listasalas()
        let i=0
        salas.forEach(function(m){
        i++
        res.write("Sala "+i+"--"+m.name+"\n")
        res.write("Ubicacion: "+m.address+"\n")
        res.write("Decripcion:"+m.description+"\n")
        res.write("-------------------------------------------------------------------------------------------------------------\n")} )
        res.end() }
        ,
    contacto:function(res){
        res.write(""+contacto.titulo+"\n\n")
        res.write(""+contacto.contenido)
        res.end()
    },
    preguntas:function(res){
        res.write(""+faq.titulo+":\nTotal de preguntas: "+faq.listafaq().length+"\n")
        let i=0
        let faqs=faq.listafaq()
        faqs.forEach(function(m){
        i++
        res.write(""+i+":"+m.faq_title+"\n")
        res.write(""+m.faq_answer+"\n")
        res.write("----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n")
        })
        res.end()
    }
} 
module.exports=index