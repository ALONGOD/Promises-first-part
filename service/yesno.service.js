'use strict'

function getAns(onSuccess) {
    $.get('https://yesno.wtf/api', onSuccess)
}

function getJoke(onSuccess) {
    $.get('https://api.chucknorris.io/jokes/random', onSuccess)
}

function getDog(onSuccess) {
    $.get('https://dog.ceo/api/breeds/image/random', onSuccess)
}


function debounce(func, wait = 300) {
    let timeout

    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout)
            func(...args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
    }
}
