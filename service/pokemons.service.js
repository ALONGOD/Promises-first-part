'use strict'

function getPokemonList(onSuccess) {
    const xhr = new XMLHttpRequest()

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const ans = JSON.parse(xhr.responseText)
            onSuccess(ans)
        }
    }
    xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon?limit=100', true)
    xhr.send()
}
function getPokemon(onSuccess, name) {
    const xhr = new XMLHttpRequest()

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const ans = JSON.parse(xhr.responseText)
            onSuccess(ans)
        }
    }
    xhr.open('GET', `https://pokeapi.co/api/v2/pokemon/${name}`, true)
    xhr.send()
}