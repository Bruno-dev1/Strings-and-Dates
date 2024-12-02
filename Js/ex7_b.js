const prompt = require("prompt-sync")()
const palavra = prompt("Palavra:")
for (i=palavra.length-1;i>=0;i--){
    console.log(palavra.charAt(i))
}
