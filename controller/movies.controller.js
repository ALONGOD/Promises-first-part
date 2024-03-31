'use strict'



function onMovieGenres() {
    getMovieGenres(renderMoviesGenres)
}

function onSelectGenre(elSelect) {
    getGenre(renderGenre, elSelect.value)
}


function renderMoviesGenres(genres) {
    const elSelect = document.querySelector('.select-genere')
    console.log(genres)
    genres.genres.forEach(genre => {
        var newOption = document.createElement('option')
        newOption.innerText = genre.name
        newOption.value = genre.id
        elSelect.appendChild(newOption)
    });
}

function renderGenre(genre) {
    console.log(genre)
    const elContainer = document.querySelector('.genre-container')
    elContainer.innerHTML = ''
    genre.results.forEach(movie => {
        var newMovie = document.createElement('div')
        newMovie.innerText = `${movie.original_title}`
        var newImg = document.createElement('img')
        newImg.src = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
        elContainer.appendChild(newMovie)
        elContainer.appendChild(newImg)
    })

}

function onImgLooad() {

}

