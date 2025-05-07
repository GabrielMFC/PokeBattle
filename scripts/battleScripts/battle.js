//919 moves
//1025 pokemons

import  fetchPlayersStats  from "./utils/statsUtils.js"
import getDamageEfficiency from "./utils/typeUtils.js"
import calculateBaseDamage from "./utils/damageUtils.js"
import fetchMoveData from "./utils/apiUtils.js"
import SpecialEffects from "./specialEffects.js"

const stats = await fetchPlayersStats()

async function battle() {
    await fetchPlayersStats()

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
        const moveData = await fetchMoveData(moveName)

        const damageInfo = {
            type: moveData.type.name,
            power: moveData.power,
            category: moveData.damage_class.name,
        }

        const specialEffects = new SpecialEffects()
        specialEffects.apply(moveData)

        const { attackStat, defenseStat } = getBattleStats(damageInfo.category)

        const typeEfficiency = await getDamageEfficiency(moveData.type.name, [stats.EnemyStats.types])

        const baseDamage = calculateBaseDamage(damageInfo.power, attackStat, defenseStat, typeEfficiency)

        console.log(baseDamage)
    } catch (error) {
        console.error(error)
    }
}

function getBattleStats(category) {
    if (category === "physical") {
        return {
            attackStat: stats.AllyStats.attack,
            defenseStat: stats.EnemyStats.defense,
        }
    } else if (category === "special") {
        return {
            attackStat: stats.AllyStats.spAttack,
            defenseStat: stats.EnemyStats.spDefense,
        }
    } else {
        console.warn("Sem categoria de dano")
        return {
            attackStat: 0,
            defenseStat: 0,
        }
    }
}

battle()