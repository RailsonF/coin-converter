//Constantes com os valores das moedas para serem alteras posteriormente, elas receberão esses valores via API
const valorDollar = 5.46
const valoreuro = 6.44
const valorLibra = 7.50

//Acessando os elementos e armazenando em variávei
const form = document.querySelector("#form")
const input = document.querySelector("#amount")
const select = document.querySelector("#currency")
const result = document.querySelector("#result")
const description = document.querySelector("#description")
const footer = document.querySelector("footer")

form.addEventListener('submit', (event) => {
    const inputValue = input.value
    const selectvalue = select.value

    if (selectvalue == "USD") {
        footer.style.display = "block"
        result.innerHTML = (inputValue * valorDollar).toFixed(2) + " R$"
        description.innerHTML = `US$ 1 = ${valorDollar}R$`

    }
    else if (selectvalue == "EUR") {
        footer.style.display = "block"
        result.innerHTML = (inputValue * valoreuro).toFixed(2) + " R$"
        description.innerHTML = `£ 1 = ${valoreuro}R$`
    }
    else if (selectvalue == "GBP") {
        footer.style.display = "block"
        result.innerHTML = (inputValue * valorLibra).toFixed(2) + " R$"
        description.innerHTML = `£ 1 = ${valorLibra}R$`
    }


    //Impedindo o comportamento padrão de enviar o forme recarregar a página
    event.preventDefault()
})