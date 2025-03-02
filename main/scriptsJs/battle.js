const AllyPokemonId = localStorage.getItem("IdAlly")
const EnemyPokemonId = localStorage.getItem("IdEnemy")

const body = document.getElementsByTagName("body")[0]

const EnemyContainer = document.getElementById("EnemyContainer")
const AllyContainer = document.getElementById("AllyContainer")

const EnemyGroup = document.getElementById("EnemyGroup")
const AllyGroup = document.getElementById("AllyGroup")


const EnemyName = document.getElementById("EnemyName")
const AllyName = document.getElementById("AllyName")

const EnemyLifeBar = document.getElementById("EnemyLifeBar")
const AllyLifeBar = document.getElementById("AllyLifeBar")

const moveGroup = document.getElementById("moveGroup")

function Scene() {
    var AllySprite = document.createElement("img")
    var EnemySprite = document.createElement("img")


    AllySprite.id = "AllySprite"
    AllySprite.alt = "Imagem de pokemon"

    EnemySprite.id = "EnemySprite"
    EnemySprite.alt = "Imagem de pokemon"

    EnemyGroup.appendChild(EnemySprite)
    AllyGroup.prepend(AllySprite)

    axios.get(`https://pokeapi.co/api/v2/pokemon/${EnemyPokemonId}`)
    .then((response) => {
        EnemySprite.src = response.data.sprites.front_default

        EnemyName.innerHTML = response.data.forms[0].name
    })
    .catch((error) => {
        console.error(error)
    })

    axios.get(`https://pokeapi.co/api/v2/pokemon/${AllyPokemonId}`)
    .then((response) => {
        AllySprite.src = response.data.sprites.back_default

        AllyName.innerHTML = response.data.forms[0].name

        console.log(response.data)

        for(let i = 0; i < 4; i++){
            var move = document.createElement("div")

            move.className = "move"
    
            move.innerHTML = response.data.moves[i].move.name
    
            moveGroup.appendChild(move)
        }
    })
    .catch((error) => {
        console.error(error)
    })
}

Scene()
