const body = document.getElementsByTagName("body")[0]
const EnemyContainer = document.getElementById("EnemyContainer")
const AllyContainer = document.getElementById("AllyContainer")
const AllyPokemonId = localStorage.getItem("IdAlly")
const EnemyPokemonId = localStorage.getItem("IdEnemy")

function Scene() {
    var AllySprite = document.createElement("img")
    var EnemySprite = document.createElement("img")

    AllySprite.id = "AllySprite"
    AllySprite.style.width = "33vh"

    EnemySprite.id = "EnemySprite"
    EnemySprite.style.width = "27vh"

    EnemyContainer.appendChild(EnemySprite)
    AllyContainer.appendChild(AllySprite)

    axios.get(`https://pokeapi.co/api/v2/pokemon/${AllyPokemonId}`)
    .then((response) => {
        AllySprite.src = response.data.sprites.back_default
    })
    .catch((error) => {
        console.error(error)
    })

    axios.get(`https://pokeapi.co/api/v2/pokemon/${EnemyPokemonId}`)
    .then((response) => {
        EnemySprite.src = response.data.sprites.front_default
    })
    .catch((error) => {
        console.error(error)
    })
}

Scene()