const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const senha = frm.inSenha.value
    const erro=[]

    if (senha.length < 8 || senha.length > 15) {
        erro.push("A senha deve ter entre 8 e 15 caracteres")
    }
    if (!senha.match(/[0-9]/g)) {
        erro.push("A senha deve conter pelo menos um digito")
    }
    if (!senha.match(/[A-Z]/g) || !senha.mach(/[A-Z]/g).length ==1) {
        erro.push("A senha deve conter pelo menos duas letra maiuscula")
    }
    if (!senha.match(/[a-z]/g)) {
        erro.push("A senha deve conter pelo menos uma letra minuscula")
    }
    if (!senha.match(/[\W|_]g/)){
        erro.push("A senha deve conter pelo menos um caracter especial")
    }
    if (erro.length == 0) {
        resp.innerText = "Senha Valida"
    } else {
        resp.innerText = "Erro de senha ... \n" +erro.join("\n")
    }
})