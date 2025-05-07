export default async function getDamageEfficiency(moveType, opponentTypes) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/type/${moveType}`)
        const damageRelations = response.data.damage_relations

        function getTypeMultiplier(type) {
            if (damageRelations.double_damage_to.some(typeObj => typeObj.name === type)) {
                return 2
            } else if (damageRelations.half_damage_to.some(typeObj => typeObj.name === type)) {
                return 0.5
            } else if (damageRelations.no_damage_to.some(typeObj => typeObj.name === type)) {
                return 0
            } else {
                return 1
            }
        }

        return opponentTypes.reduce((total, type) => total * getTypeMultiplier(type), 1)
    } catch (error) {
        console.error(error)
        return 1
    }
}