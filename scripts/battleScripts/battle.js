//919 moves
//1025 pokemons

import  fetchPlayersStats  from "./utils/statsUtils.js"
import getDamageEfficiency from "./utils/typeUtils.js"
import damageUtils from "./utils/damageUtils.js"
import apiUtils from "./utils/apiUtils.js"
import SpecialEffects from "./specialEffects.js"
import Enemy from "./enemy.js"

const stats = await fetchPlayersStats()

async function battle() {
    updateLifeBars()

    const allyMoveButtons = document.querySelectorAll(".move")
    allyMoveButtons.forEach(button => {
        button.addEventListener("click", () => handleMoveClick(button))
    })
}

async function updateLifeBars() {
    
    document.getElementById("AllyLifeBar").innerHTML = stats.AllyStats.hp
    document.getElementById("EnemyLifeBar").innerHTML = stats.EnemyStats.hp
}

async function handleMoveClick(button) {
    try {
        const moveName = button.dataset.move
        const moveData = await apiUtils.fetchMoveData(moveName)

        const damageInfo = {
            type: moveData.type.name,
            power: moveData.power,
            category: moveData.damage_class.name,
        }

        const specialEffects = new SpecialEffects()
        specialEffects.apply(moveData)

        const { attackerStat, defenderStat } = damageUtils.getDamageClass(stats.AllyStats, stats.EnemyStats, damageInfo.category)

        const typeEfficiency = await getDamageEfficiency(moveData.type.name, [stats.EnemyStats.types])

        const baseDamage = damageUtils.calculateBaseDamage(damageInfo.power, attackerStat, defenderStat, typeEfficiency)
        
        //teste
        const enemyResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${EnemyPokemonId}`)

        const moves = []

        for(var i = 0; i < 4; i++) {
            moves.push(enemyResponse.data.moves[i].move.name)
        }
        
        const enemy = new Enemy(stats.EnemyStats, moves, stats.AllyStats.types)

        enemy.analyzingOpponent()
        
        //teste
        console.log(baseDamage)
    } catch (error) {
        console.error(error)
    }
}

battle()