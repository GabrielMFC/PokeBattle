function calculateBaseDamage(power, attackerStat, defenderStats, typeEfficiency) {
    return Math.floor((((2 * 100 / 5 + 2) * power * (attackerStat / defenderStats)) / 50 + 2) * typeEfficiency)
}

function getDamageClass(attacker, defender, category) {
    if (category === "physical") {
        return {
            attackerStat: attacker.attack,
            defenderStat: defender.defense,
        }
    } else if (category === "special") {
        return {
            attackerStat: attacker.spAttack,
            defenderStat: defender.spDefense,
        }
    } else {
        console.warn("Sem categoria de dano")
        return {
            attackerStat: 0,
            defenderStats: 0,
        }
    }
}

export default {calculateBaseDamage, getDamageClass}