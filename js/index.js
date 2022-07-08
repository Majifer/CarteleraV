const  requestURL = '../json/peliculas.json';


async function fetchMoviesJSON(){
    const response = await fetch (requestURL);
    const movies = await response.json();
    return movies
}

fetchMoviesJSON().then(movies =>{
    for(let index = 0; index < movies.peliculas.length; index++){
        
        const moviesSection = document.getElementById('moviesSection');

        let id = movies.peliculas[index].id;

        let title = movies.peliculas[index].nombre;

        let year = movies.peliculas[index].production;

        let director = movies.peliculas[index].director;

        let gender = movies.peliculas[index].clasificacion;

        let img = movies.peliculas[index].caratula;

        let description = movies.peliculas[index].descripcion;

        let info = movies.peliculas[index].information;

        moviesSection.innerHTML +=`
        <div class="card" style="width: 18rem;">
            <img src="${img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${id}. ${title} - ${year}</h5>
                <p>------------</p>
                <p class="card-text">${director} - ${gender} -<p>------------</p><br><p>SINOPSIS</p>${description}</p>
                <a href="${info}" class="btn btn-primary">Valoraciones y Criticas sobre la Pelicula</a><br><br>
                <a href="${info}" class="btn btn-primary">Valoraciones y Criticas sobre la Pelicula</a><br><br>
                <a href="${info}" class="btn btn-primary">Valoraciones y Criticas sobre la Pelicula</a>
            </div>
        </div>
        
    `
    }


})