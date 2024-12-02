const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const texto = frm.inTexto.value
    let cript = ""
    
    
    for (let i = 1; i <= texto.length; i++) {
        if (i % 2 == 0) {  
            cript += texto.charAt(i - 1)  
        }
    }

   
    for (let i = 1; i <= texto.length; i++) {
        if (i % 2 != 0) {  
            cript += texto.charAt(i - 1) 
        }
    }
    
    resp.innerText = cript
})

frm.btDescriptografar.addEventListener("click", () => {
        const textoCriptografado = frm.inTexto.value 
        let descriptografado = ""
        if(textoCriptografado.length%2==0){
        const meio = Math.ceil(textoCriptografado.length / 2)
    
        const pares = textoCriptografado.slice(0, meio)
        
        const impares = textoCriptografado.slice(meio)
    
        for (let i = 0; i < impares.length; i++) {
            descriptografado += impares[i] 
            if (i < pares.length) {
                descriptografado += pares[i] 
            }
        }
    
        resp.innerText = descriptografado
    }else{
        const meio = Math.ceil((textoCriptografado.length / 2)-1)
    
        const pares = textoCriptografado.slice(0, meio)
        
        const impares = textoCriptografado.slice(meio)
    
        for (let i = 0; i <= pares.length; i++) {
            descriptografado += impares[i] 
            if (i < pares.length) {
                descriptografado += pares[i] 
            }
        }
    
        resp.innerText = descriptografado
    }
    })
    