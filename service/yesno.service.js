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

