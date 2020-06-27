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

    }
}
module.exports=votadas