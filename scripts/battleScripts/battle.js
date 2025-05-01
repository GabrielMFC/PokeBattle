//919 moves
//1025 pokemons

let EnemyStats
let AllyStats

async function GetPlayersStats() {
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${EnemyPokemonId}`)
    .then((response) => {
        EnemyStats = {
            types : response.data.types,
            hp : ((response.data.stats[0].base_stat + 31) * 2) + 110,
            attack : ((2 * response.data.stats[1].base_stat + 31)) + 5,
            defense : ((2 * response.data.stats[2].base_stat + 31)) + 5,
            spAttack : ((2 * response.data.stats[3].base_stat + 31)) + 5,
            spDefense : ((2 * response.data.stats[4].base_stat + 31)) + 5,
            speed : ((2 * response.data.stats[5].base_stat + 31)) + 5
        }
        
        return EnemyStats
    })
    .catch((error) => {
        console.error(error);
        
    })
        
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${AllyPokemonId}`)
    .then((response) => {
        AllyStats = {
            types : response.data.types,
            hp : ((response.data.stats[0].base_stat + 31) * 2) + 110,
            attack : ((2 * response.data.stats[1].base_stat + 31)) + 5,
            defense : ((2 * response.data.stats[2].base_stat + 31)) + 5,
            spAttack : ((2 * response.data.stats[3].base_stat + 31)) + 5,
            spDefense : ((2 * response.data.stats[4].base_stat + 31)) + 5,
            speed : ((2 * response.data.stats[5].base_stat + 31)) + 5,
            strongAgainst : []
        }

        return AllyStats
    })
    .catch((error) => {
        console.error(error);
        
    })
}

let DamageObj = {}
async function DamageEfficiency(moveType, OppositeType){
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/type/${moveType}`)
        const damage_relations = response.data.damage_relations

        function typeEfficiency(type){
            if(damage_relations.double_damage_to.some(typeObj => typeObj.name === type)){
                return 2
            }else if(damage_relations.half_damage_to.some(typeObj => typeObj.name === type)){
                return 0.5
            }else if(damage_relations.no_damage_to.some(typeObj => typeObj.name === type)){
                return 0
            }else{
                return 1
            }
        }

        let totalEfficiency = 1
        for(let type of OppositeType){
            totalEfficiency *= typeEfficiency(type)
        }
        
        return totalEfficiency
    } catch (error) {
        console.log(error)
        return 404
    }
}

async function battle() {
    await GetPlayersStats()

    document.getElementById("AllyLifeBar").innerHTML = AllyStats.hp
    document.getElementById("EnemyLifeBar").innerHTML = EnemyStats.hp

    const AllyMoveButton = document.querySelectorAll(".move")

    AllyMoveButton.forEach(move => {
        move.addEventListener("click", async () => {
            await axios.get(`https://pokeapi.co/api/v2/move/${move.dataset.move}`).then((response) => {
                DamageObj = {
                    moveType : response.data.type.name,
                    movePower : response.data.power,
                    classDamage : response.data.damage_class.name,
                }
                console.log(DamageObj.moveType)
                return DamageObj
            }).catch((error) => {
                console.log(error)
            })

            if(DamageObj.classDamage === "physical"){
                var damageCount = Math.floor((((2*100/5+2) * DamageObj.movePower * (AllyStats.attack/EnemyStats.defense))/50 + 2))
            }else if(DamageObj.classDamage === "special"){
                var damageCount = Math.floor((((2*100/5+2) * DamageObj.movePower * (AllyStats.spAttack/EnemyStats.spDefense))/50 + 2))
            }
        })
    })
}
//Criar função de checape de final de turno
battle()