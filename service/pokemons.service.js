'use strict'

function getPokemonList(pokemonLength) {
    return axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonLength}`)
        .then(ans => ans.data)

}
function getPokemon(name) {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(ans => ans.data)

}