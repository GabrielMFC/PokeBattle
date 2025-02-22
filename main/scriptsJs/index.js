let body = document.getElementsByTagName("body")[0]
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
        img.src = "/imgs/PokeAPIimg.png"

        setTimeout(() => {
            body.style.backgroundColor = "white"
            h.remove()
            p.remove()
            img.remove()
        }, 2500);
    }

    AberturaDoJogo()