const fs=require("fs")  
let cartelera={
    bd:"./data/movies.json",
    titulo:"En cartelera",
    leerJSON: function() {
        let moviesJson = fs.readFileSync(this.bd, 'utf-8');
        let movies = JSON.parse(moviesJson);
        return movies
    },
    cantidad: function() {
        return this.leerJSON().total_movies},
    lista:function(){
        let movies = this.leerJSON();
        let titleMovies = []
        movies.movies.forEach(function(movie) {
            titleMovies.push(movie)
          
        })
        return titleMovies;
    }

}
module.exports=cartelera