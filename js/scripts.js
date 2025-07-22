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


//Função que vai apenas calcular o valor
function calculateConversion(value, rate) {
    return (value * rate).toFixed(2) + " R$"
}

//Função que formata moedas
function formatedCoin(element, typeOfCoin) {
    if (typeOfCoin === "USD") {
        element.innerHTML =`US$ 1 = ${valorDollar}R$`
        return element
    }

    else if (typeOfCoin === "EUR"){
        element.innerHTML = `€ 1 = ${valorEuro}R$`
        return element
    }

    else  if(typeOfCoin === "GBP") {
        element.innerHTML = `£ 1 = ${valorLibra}R$`
        return element
    }
}

function typeOfDisplay(element, display = "block") {
     return element.style.display = display
}


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
    switch (selectvalue) {
        case "USD":
            typeOfDisplay(footer)
            result.innerHTML = calculateConversion(inputValue, valorDollar)
            typeOfCoin(description,"USD")
            break;
        case "EUR":
            typeOfDisplay(footer)
            result.innerHTML = calculateConversion(inputValue, valorEuro)
            typeOfCoin(description, "EUR")
            break;
        case "GBP":
            typeOfDisplay(footer)
            result.innerHTML = calculateConversion(inputValue, valorLibra)
            typeOfCoin(description, "GBP")
        default:
            break;
    }
    
})