const body = document.getElementsByTagName("body")[0]

const EnemyContainer = document.getElementById("EnemyContainer")
const AllyContainer = document.getElementById("AllyContainer")

const AllyPokemonId = localStorage.getItem("IdAlly")
const EnemyPokemonId = localStorage.getItem("IdEnemy")

const EnemyName = document.getElementById("EnemyName")
const AllyName = document.getElementById("AllyName")

const EnemyLifeBar = document.getElementById("EnemyLifeBar")
const AllyLifeBar = document.getElementById("AllyLifeBar")

function Scene() {
    var AllySprite = document.createElement("img")
    var EnemySprite = document.createElement("img")

    AllySprite.id = "AllySprite"

    EnemySprite.id = "EnemySprite"

    EnemyContainer.appendChild(EnemySprite)
    AllyContainer.appendChild(AllySprite)

    axios.get(`https://pokeapi.co/api/v2/pokemon/${EnemyPokemonId}`)
    .then((response) => {
        console.log(response.data)
        EnemySprite.src = response.data.sprites.front_default

        EnemyName.innerHTML = response.data.forms[0].name

        EnemyLifeBar.innerHTML += response.data.stats[0].base_stat
    })
    .catch((error) => {
        console.error(error)
    })

    axios.get(`https://pokeapi.co/api/v2/pokemon/${AllyPokemonId}`)
    .then((response) => {
        AllySprite.src = response.data.sprites.back_default

        AllyName.innerHTML = response.data.forms[0].name

    })
    .catch((error) => {
        console.error(error)
    })

}

Scene()