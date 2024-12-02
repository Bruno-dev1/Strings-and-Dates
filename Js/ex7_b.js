const prompt = require("prompt-sync")()
const palavra = prompt("Palavra:").toUpperCase()
const encurtada = palavra.replace(/ /g,"")
let falg =""
for (i=encurtada.length-1;i>=0;i--){
    falg+=encurtada.charAt(i)
}
if(falg==encurtada){
    console.log(palavra +" é um Palindromo")
}else{
    console.log(palavra +" Nao palindromo")
}