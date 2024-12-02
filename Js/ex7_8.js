const frm = document.querySelector("form")
const resp = document.querySelector("h3")

const TAXA_MULTA = 2/100
const TAXA_JUROS = 0.33 / 100

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const DataVen = frm.inData.value
    const valor = Number(frm.inValor.value)
    const hoje = new Date()
    const venc = new Date()

    const partes = DataVen.split("-") //Data em aaaa-mm-dd
    venc.setFullYear(partes[0])
    venc.setMonth(partes[1]-1)
    venc.setDate(partes[2])

    const atraso = hoje - venc
    let multa = 0
    let juros = 0

    if(atraso> 0){
        const dias = atraso / (1000 * 60 * 60 * 24)
        multa = valor * TAXA_MULTA 
        juros = valor * TAXA_JUROS * dias
    }

    const total = valor + multa + juros
    frm.outMulta.value = multa.toFixed(2)
    frm.outJuros.value = juros.toFixed(2)
    frm.outTotal.value = total.toFixed(2)
})
