const nome = "adenaldo"
let nome_alt =""
for (letra of nome) {
    if (letra == "a") {
        nome_alt+="4"
    } else {
        nome_alt+=letra
    }
}
console.log(nome_alt)
