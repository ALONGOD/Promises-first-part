'use strict'

function getAns() {
    return axios.get('https://yesno.wtf/api')
        .then(res => res.data)
}

function getJoke(onSuccess) {
    return axios.get('https://api.chucknorris.io/jokes/random')
        .then(res => res.data)
}

function getDog(onSuccess) {
    return axios.get('https://dog.ceo/api/breeds/image/random')
        .then(res => res.data)
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
