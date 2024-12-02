const frm = document.querySelector("form")
const resp = document.querySelector("h3")
const resp2 = document.querySelector("h2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const data = frm.inData.value
    const valor = Number(frm.inMulta.value)
    const prazo = new Date(data).setDate(new Date(data).getDate() + 91)
    const desconto =valor-valor*0.2

    resp.innerText = `Vencimento em ${new Date(prazo).toLocaleDateString("pt-BR")}`
    resp2.innerText = `Multa com desconto R$ ${desconto.toFixed(2)}`
})