'use strict'

const pokemonNum = 20

function onGetPokemon() {
    if (document.querySelector('.pokemons').innerHTML === '') {
        getPokemonList(pokemonNum)
            .then(ans => callPokemon(ans))
    }
}




function callPokemon(pokemon) {
    pokemon.results.forEach(pokemon => {
        getPokemon(pokemon.name)
            .then(ans => renderPokemon(ans))
    })
}

function renderPokemon(pokemon) {
    // console.log(pokemon)
    var elPokemons = document.querySelector('.pokemons')
    var newDiv = document.createElement('div')
    newDiv.textContent = `name: ${pokemon.name} /n weight: ${pokemon.weight}`
    // Create an image element
    var img = document.createElement('img')
    img.src = pokemon.sprites.front_default
    img.alt = pokemon.name
    newDiv.appendChild(img)

    elPokemons.appendChild(newDiv)

    // console.log(pokemon)
}
