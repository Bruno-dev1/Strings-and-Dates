const prompt = require("prompt-sync")()
const altura = Number(prompt("Altura: "))
console.log(" ".repeat(30+ altura)+"*")
for (let i = 1; i <= altura; i++) {
    const espaço = 30 +(altura - i)
    console.log( " ".repeat(espaço) + "*".repeat(i*2))
}