'use strict'



function onGetPokemon() {
    if (document.querySelector('.pokemons').innerHTML === '') getPokemonList(callPokemon)
}


function callPokemon(pokemon) {
    // console.log(pokemon)
    // var strHtml = ''
    // pokemon.results.foreach(pokemon => {
    //     console.log(name)
    // })
    pokemon.results.forEach(pokemon => {
        getPokemon(renderPokemon, pokemon.name)


    });
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