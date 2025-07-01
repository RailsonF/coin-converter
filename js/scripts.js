//Constantes com os valores das moedas para serem alteras posteriormente, elas receberão esses valores via API
const valorDollar = 5.46
const valorEuro = 6.44
const valorLibra = 7.50

//Acessando os elementos e armazenando em variáveis
const form = document.querySelector("#form")
const amount = document.querySelector("#amount")
const select = document.querySelector("#currency")
const result = document.querySelector("#result")
const description = document.querySelector("#description")
const footer = document.querySelector("footer")


//Lógica do evento
form.addEventListener('submit', (event) => {
    //Impedindo o comportamento padrão de enviar o forme recarregar a página
    event.preventDefault()

    const inputValue = parseFloat(amount.value) //Convertendo o valor de input para number
    const selectvalue = select.value

    //Validando a entrada dos dados
    if (isNaN(inputValue) || inputValue <= 0) {
        alert("Por favor, insira um valor válido e positivo.")
        //Limpando os resultados se a entrada for inválida
        footer.style.display = "none"
        result.innerHTML = ""
        description.innerHTML = ""
        return //encerrando a função
    }
    if (selectvalue == "USD") {
        footer.style.display = "block"
        result.innerHTML = (inputValue * valorDollar).toFixed(2) + " R$"
        description.innerHTML = `US$ 1 = ${valorDollar}R$`

    }
    else if (selectvalue == "EUR") {
        footer.style.display = "block"
        result.innerHTML = (inputValue * valorEuro).toFixed(2) + " R$"
        description.innerHTML = `€ 1 = ${valorEuro}R$`
    }
    else if (selectvalue == "GBP") {
        footer.style.display = "block"
        result.innerHTML = (inputValue * valorLibra).toFixed(2) + " R$"
        description.innerHTML = `£ 1 = ${valorLibra}R$`
    }
})