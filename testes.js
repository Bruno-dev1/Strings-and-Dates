const prompt = require("prompt-sync")()
const palavra = prompt("Palavra:")
const encurtada = palavra.replace(" ","")
console.log(encurtada)