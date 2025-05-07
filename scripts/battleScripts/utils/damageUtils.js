export default function calculateBaseDamage(power, attackStat, defenseStat, typeEfficiency) {
    return Math.floor((((2 * 100 / 5 + 2) * power * (attackStat / defenseStat)) / 50 + 2) * typeEfficiency)
}