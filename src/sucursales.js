const fs=require("fs")

let sucursales={
    bd:"./data/theaters.json",
    titulo: "Nuestras Salas:",
    leerJSON: function() {
        let salasjson = fs.readFileSync(this.bd, 'utf-8');
        let salas = JSON.parse(salasjson);
        return salas 
     },
     listasalas:function(){
        let salas=this.leerJSON()
        let sala=[]
        salas.theaters.forEach(function(n){
        sala.push(n)
        })
        return sala
     }
    
}
module.exports=sucursales;