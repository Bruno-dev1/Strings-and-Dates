const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const funcionario = frm.inFuncionario.value.trim()
    if (!funcionario.includes(" ")) {
        alert("Digite o nome completo")
        return
    }
    const priNome =funcionario.indexOf(" ")
    const ultNome = funcionario.lastIndexOf(" ")
    const cracha = funcionario.substr(0,priNome) + funcionario.substr(ultNome)
    resp.innerText = `Crachá: ${cracha}`
})