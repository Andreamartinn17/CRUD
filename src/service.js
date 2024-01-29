  //GET 
  async function getMovies (){
    const moviesList = await fetch ("http://localhost:3000/movies");
    const dataMovies = await moviesList.json();
    return dataMovies;
  }
 let moviesSectionTag = document.getElementById("movies-list")
 async function printMovies(){
    let movies = await getMovies();
    movies.map (movie => {
        moviesSectionTag.innerHTML += // podemos añadir en los elementos html una clase
        `<div class="movie-item"><h3>${movie.name}</h3> 
        <p>${movie.gender}</p>
        <p><small>${movie.year}</small></p>
        <button type="button" onclick="deleteMovie('${movie.id}')">Delete</button>
        <button type="button" onclick="editMovie('${movie.id}')">Edit</button>
        <hr></div>`
    })
 }
 //DELETE
async function deleteMovie (id){
    const result = await fetch(`http://localhost:3000/movies/${id}`,
    {method: "Delete"})
    return result
}

//Método PUT U (update) del CRUD

async function editMovie(id) {
    const newTitle = prompt('Introduzca el título:');
    const newGender = prompt('Introduzca el género:');
    const newYear = prompt('Introduzca el año:');


    const response = await fetch(`http://localhost:3000/movies/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: newTitle,
            gender: newGender,
            year: newYear
        }),
    });

    return response
}

// function countMovies() { //función para contar el nº de pelis y añadirlas en la función de crear
//     return document.querySelectorAll(".movie-item").length;
// }

 //Método POST C (create) del CRUD
async function createMovie() { 
    // const totalMovies = countMovies() + 1;
    const newMovie = {
        // "id": `${totalMovies}`,
        "name": document.getElementById("tittle").value,
        "gender": document.getElementById("gender").value,
        "year": document.getElementById ("year").value
      }
    const result = await fetch (`http://localhost:3000/movies/`,
    { 
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        }, 
        body: JSON.stringify(newMovie)
    }
    )
}

printMovies ();

