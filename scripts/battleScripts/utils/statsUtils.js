function formatPlayersTypes(data) {
    let types = []
    for(var i = 0; i < data.types.length; i++){
        types.push(data.types[i].type.name)
    }
    return types
}

function calculateStats(data) {
    return {
        types : formatPlayersTypes(data),
            hp : ((data.stats[0].base_stat + 31) * 2) + 110,
            attack : ((2 * data.stats[1].base_stat + 31)) + 5,
            defense : ((2 * data.stats[2].base_stat + 31)) + 5,
            spAttack : ((2 * data.stats[3].base_stat + 31)) + 5,
            spDefense : ((2 * data.stats[4].base_stat + 31)) + 5,
            speed : ((2 * data.stats[5].base_stat + 31)) + 5
    }
}

export default async function fetchPlayersStats() {
    try {
        const enemyResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${EnemyPokemonId}`)

        const allyResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${AllyPokemonId}`)

        let EnemyStats = calculateStats(enemyResponse.data)
        let AllyStats = calculateStats(allyResponse.data)

        return {EnemyStats, AllyStats}

    } catch (error) {
        console.error(error)
    }
}