const fs=require("fs");
let votadas={
    bd:"./data/movies.json",
    titulo:"Mas Votadas",
    leerJSON: function() {
        let moviesJson = fs.readFileSync(this.bd, 'utf-8');
        let movies = JSON.parse(moviesJson);
        return movies },
    listado: function(){
    let movie=this.leerJSON()
    let voto= movie.movies.filter(function(m){
        return m.vote_average >7
    })
    return voto

    },
    promedio:function(){
        let pelis = this.listado();
        let promedio=0;
        pelis.forEach(function(dat){
            promedio += dat.vote_average
        })
        return Math.round(promedio / pelis.length)
    }}
module.exports=votadas