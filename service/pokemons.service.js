'use strict'

function getPokemonList(onSuccess,pokemonLength) {
    $.get(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonLength}`, onSuccess)
}
function getPokemon(onSuccess, name) {
    $.get(`https://pokeapi.co/api/v2/pokemon/${name}`, onSuccess)
}