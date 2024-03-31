'use strict'



function getMovieGenres(onSuccess) {
    const xhr = new XMLHttpRequest()

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const ans = JSON.parse(xhr.responseText)
            onSuccess(ans)
        }
    }
    xhr.open('GET', 'https://api.themoviedb.org/3/genre/movie/list?api_key=d8491b147371cf2b76ba930f5ed4eadb', true)
    xhr.send()
}


function getGenre(onSuccess, genreId) {
    const xhr = new XMLHttpRequest()

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const ans = JSON.parse(xhr.responseText)
            onSuccess(ans)
        }
    }
    xhr.open('GET', `https://api.themoviedb.org/3/discover/movie?api_key=d8491b147371cf2b76ba930f5ed4eadb&with_genres=${genreId}`, true)
    xhr.send()
}


