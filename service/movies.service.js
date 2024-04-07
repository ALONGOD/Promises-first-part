'use strict'


function getMovieGenres() {
    return axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=d8491b147371cf2b76ba930f5ed4eadb')
        .then(ans => ans.data)
}


function getGenre(genreId) {
    return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=d8491b147371cf2b76ba930f5ed4eadb&with_genres=${genreId}`)
        .then(ans => ans.data)
}


