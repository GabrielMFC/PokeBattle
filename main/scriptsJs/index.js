const body = document.getElementsByTagName("body")[0]
const LimitedIMG = document.getElementById("LimitedIMG")

    body.style.backgroundColor = "black"

    function AberturaDoJogo() {
        var AgruparFlex = document.createElement("div")
        var h = document.createElement("h1")
        var p = document.createElement("p")
        var img = document.createElement("img")
        
        body.style.overflow = "hidden"

        AgruparFlex.style.position = "absolute"
        AgruparFlex.style.width = "100%"
        AgruparFlex.style.height = "100%"
        AgruparFlex.style.display = "flex"
        AgruparFlex.style.alignItems = "center"
        AgruparFlex.style.justifyContent = "center"
        AgruparFlex.style.flexDirection = "column"

        h.style.color = "white"
        h.style.fontSize = "10vh"
        p.style.color = "white"
        p.style.fontSize = "3vh"
        img.style.width = "15vh"

        body.appendChild(AgruparFlex)
        AgruparFlex.appendChild(h)
        AgruparFlex.appendChild(p)
        AgruparFlex.appendChild(img)

        h.innerHTML = "PokeBattle"
        p.innerHTML = "Made <br> with:"
        LimitedIMG.src = "/imgs/ApiImg.png"

        setTimeout(() => {
            body.style.backgroundColor = "black"
            AgruparFlex.remove()
            h.remove()
            p.remove()
            img.remove()

            var title = document.createElement("h1")
            var centralizarFlex = document.createElement("div")
            var AllypokemonContainer = document.createElement("div")
            var AllypokemonSearcher = document.createElement("input")
            var playBtn =  document.createElement("input")
            var EnemypokemonContainer = document.createElement("div")
            var EnemypokemonSearcher = document.createElement("input")
            var AllyContainer = document.createElement("div")
            var EnemyContainer = document.createElement("div")
            var AllyBtn = document.createElement("input")
            var  EnemyBtn = document.createElement("input")

            title.style.width = "100%"
            title.innerHTML = "Poke Battle"
            title.style.color = "white"
            title.style.textAlign = "center"

            AllypokemonContainer.style.width = "10vh"
            AllypokemonContainer.style.height = "10vh"
            AllypokemonContainer.style.border = "0.5vh solid gray"
            AllypokemonContainer.style.display = "flex"
            AllypokemonContainer.style.justifyContent = "center"
            AllypokemonContainer.style.alignItems = "center"

            AllypokemonSearcher.type = "text"
            AllypokemonSearcher.placeholder = "Id..."
            AllypokemonSearcher.style.width = "7vh"
            AllyContainer.style.marginRight = "5%"

            AllyBtn.type = "button"
            AllyBtn.style.cursor = "pointer"

            playBtn.type = "button"
            playBtn.value = "Play"
            playBtn.style.cursor = "pointer"
            playBtn.id = "playBtn"

            EnemypokemonContainer.style.width = "10vh"
            EnemypokemonContainer.style.height = "10vh"
            EnemypokemonContainer.style.border = "0.5vh solid gray"
            EnemypokemonContainer.style.display = "flex"
            EnemypokemonContainer.style.justifyContent = "center"
            EnemypokemonContainer.style.alignItems = "center"

            EnemypokemonSearcher.type = "text"
            EnemypokemonSearcher.placeholder = "Id..."
            EnemypokemonSearcher.style.width = "7vh"
            EnemyContainer.style.marginLeft = "5%"

            EnemyBtn.type = "button"
            EnemyBtn.style.cursor = "pointer"

            centralizarFlex.style.position = "absolute"
            centralizarFlex.style.width = "100%"
            centralizarFlex.style.height = "70%"
            centralizarFlex.style.display = "flex"
            centralizarFlex.style.justifyContent = "center"
            centralizarFlex.style.alignItems = "center"
            centralizarFlex.style.flexDirection = "row"

            body.appendChild(title)
            body.appendChild(centralizarFlex)

            centralizarFlex.appendChild(AllyContainer)
            centralizarFlex.appendChild(playBtn)
            centralizarFlex.appendChild(EnemyContainer)

            var AllyPokemonSprite = document.createElement("img")

            var EnemyPokemonSprite = document.createElement("img")

            AllyContainer.appendChild(AllypokemonContainer)
            AllyContainer.appendChild(AllypokemonSearcher)
            AllypokemonContainer.appendChild(AllyPokemonSprite)
            AllyContainer.appendChild(AllyBtn)

            EnemyContainer.appendChild(EnemypokemonContainer)
            EnemyContainer.appendChild(EnemypokemonSearcher)
            EnemypokemonContainer.appendChild(EnemyPokemonSprite)
            EnemyContainer.appendChild(EnemyBtn)

            //1025 pokemons
            AllyBtn.addEventListener("click", () => {
                axios.get(`https://pokeapi.co/api/v2/pokemon/${AllypokemonSearcher.value}`)
                .then((response) => {
                    AllyPokemonSprite.src = response.data.sprites.front_default
                })
                .catch((error) => {
                console.error(error)
                })
            })

            EnemyBtn.addEventListener("click", () => {
                axios.get(`https://pokeapi.co/api/v2/pokemon/${EnemypokemonSearcher.value}`)
                .then((response) => {
                EnemyPokemonSprite.src = response.data.sprites.front_default
                })
                .catch((error) => {
                console.error(error)
                })
            })

            playBtn.addEventListener("click", () => {
                localStorage.setItem("IdAlly", AllypokemonSearcher.value)

                localStorage.setItem("IdEnemy", EnemypokemonSearcher.value)

                window.location.href = "battle.html"
            })

        }, 2000);
    }

    AberturaDoJogo()