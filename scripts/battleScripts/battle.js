//919 moves
//1025 pokemons

async function battle() {
    let EnemyObj
    let AllyObj

    //Enemy info
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${EnemyPokemonId}`)
    .then((response) => {
        EnemyObj = response.data
        return EnemyObj
    })
    .catch((error) => {
        console.error(error);
        
    })
        
    //Ally info
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${AllyPokemonId}`)
    .then((response) => {
        AllyObj = response.data
        return AllyObj
    })
    .catch((error) => {
        console.error(error);
        
    })

    //Life bars
    var EnemyLifeBar = EnemyObj.
    console.log("Ally: " + AllyObj.name)
    console.log("Enemy: " + EnemyObj.name)

}

battle()