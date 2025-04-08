//919 moves
//1025 pokemons

let EnemyObj
let AllyObj

const types = {
    normal: {
        strong: [],
        weak: ["fighting"],
        imunnity: ["ghost"]
    },

    fire: {
        strong: ["grass", "ice", "bug", "steel"],
        weak: ["water", "ground", "rock"],
        imunnity: []
    },

    water:{
        strong: ["fire", "ground", "rock"],
        weak: ["electric", "grass"],
        imunnity: []
    },

    grass: {
        strong: ["water", "ground", "rock"],
        weak: ["fire", "ice", "flying", "poison", "bug"],
        imunnity: []
    },

    ice: {
        strong: ["grass", "ground", "flying", "dragon"],
        weak: ["fire", "fighting", "rock", "steel"],
        imunnity: []
    },

    fighting: {
        strong: ["normal", "ice", "rock", "steel", "dark"],
        weak: ["flying", "psychic", "fairy"],
        imunnity: []
    },

    flying: {
        strong: ["fighting", "bug", "grass"],
        weak: ["electric", "ice", "rock"],
        imunnity: ["ground"]
    },

    poison: {
        strong: ["grass", "fairy"],
        weak: ["ground", "psychic"],
        imunnity: []
    },

    ground: {
        strong: ["fire", "electric", "poison", "rock", "steel"],
        weak: ["water", "grass", "ice"],
        imunnity: ["electric"]
    },

    psychic: {
        strong: ["fighting", "poison"],
        weak: ["bug", "ghost", "dark"],
        imunnity: []
    },

    bug: {
        strong: ["grass", "psychic", "dark"],
        weak: ["fire", "flying", "rock"],
        imunnity: []
    },

    rock: {
        strong: ["fire", "ice", "flying", "bug"],
        weak: ["water", "grass", "fighting", "ground", "steel"],
        imunnity: []
    },

    ghost: {
        strong: ["ghost", "psychic"],
        weak: ["ghost", "dark"],
        imunnity: ["normal", "fighting"]
    },

    dragon: {
        strong: ["dragon"],
        weak: ["ice", "dragon", "fairy"],
        imunnity: []
    },

    dark: {
        strong: ["psychic", "ghost"],
        weak: ["fighting", "bug", "fairy"],
        imunnity: []
    },

    steel: {
        strong: ["ice", "rock", "fairy"],
        weak: ["fire", "fighting", "ground"],
        imunnity: ["poison"]
    },

    fairy: {
        strong: ["fighting", "dragon", "dark"],
        weak: ["poison", "steel"],
        imunnity: ["dragon"]
    },

    electric: {
        strong: ["water", "flying"],
        weak: ["ground"],
        imunnity: []
    }

}

async function GetData() {
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
        console.log(response.data)
        return AllyObj = response.data
    })
    .catch((error) => {
        console.error(error);
        
    })
}

async function battle() {
    await GetData()

    //Life bars
    var AllyLife = ((AllyObj.stats[0].base_stat + 31) * 2 + (0 / 4)) + 110

    var EnemyLife = ((EnemyObj.stats[0].base_stat + 31) * 2 + (0 / 4)) + 110

    document.getElementById("AllyLifeBar").innerHTML = AllyLife
    document.getElementById("EnemyLifeBar").innerHTML = EnemyLife

    async function DamageCalc(dmg1, dmg2) {
       await axios.get("'https://pokeapi.co/api/v2/type/6/'").then((response) => {
        console.log(response.data)
       }).catch((error) => {
        console.log(error)
       })
    }

    DamageCalc()

    const move0 = document.getElementById("move0")

    move0.addEventListener("click", async () => {
        var damage
        await axios.get(`https://pokeapi.co/api/v2/move/${move0.dataset.move}`).then((response) => {
            console.log(response.data.power)
            damage = response.data.power
            return damage
        }).catch((error) => {
            console.log(error)
        })

        document.getElementById("EnemyLifeBar").innerHTML = EnemyLife - damage
    })
}
//Criar função de checape de final de turno
battle()