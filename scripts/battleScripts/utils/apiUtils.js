async function fetchMoveData(moveName) {
    const moveResponse = await axios.get(`https://pokeapi.co/api/v2/move/${moveName}`)
    return moveResponse.data
}

async function fetchPokemonData(pokemon) {
    const pokemonResponse = await axios.get(`https://pokeapi.co/api/v2/move/${pokemon}`)
    return pokemonResponse.data
}

export default {fetchMoveData, fetchPokemonData}