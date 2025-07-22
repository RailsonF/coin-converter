//Constantes com os valores das moedas para serem alteras posteriormente, elas receberão esses valores via API.
const valorDollar = 5.46;
const valorEuro = 6.44;
const valorLibra = 7.5;

//Acessando os elementos e armazenando em variávei.s
const form = document.querySelector("#form");
const amount = document.querySelector("#amount");
const select = document.querySelector("#currency");
const result = document.querySelector("#result");
const description = document.querySelector("#description");
const footer = document.querySelector("footer");

//Função que vai apenas calcular e retornar o valor convertido.
function calculateConversion(value, rate) {
  return value * rate;
}

//Função que formata moedas
function formatedCoin(typeOfCoin, rate) {
  switch (typeOfCoin) {
    case "USD":
      return `US$ 1 = ${rate}R$`;
    case "EUR":
      return `€ 1 = ${rate}R$`;
    case "GBP":
      return `£ 1 = ${rate}R$`;
    default:
      return "";
  }
}

//Lógica do evento
form.addEventListener("submit", (event) => {
  //Impedindo o comportamento padrão de enviar o form e recarregar a página
  event.preventDefault();

  const inputValue = parseFloat(amount.value); //Convertendo o valor de input para number e capturando o valor do campo
  const selectvalue = select.value;

  //Validando a entrada dos dados
  if (isNaN(inputValue) || inputValue <= 0) {
    alert("Por favor, insira um valor válido e positivo.");
    //Limpando os resultados se a entrada for inválida
    footer.style.display = "none";
    result.innerHTML = "";
    description.innerHTML = "";
    return; //encerrando a função
  }
  let selectedrate;
  switch (selectvalue) {
    case "USD":
      selectedrate = valorDollar;
      break;
    case "EUR":
      selectedrate = valorEuro;
      break;
    case "GBP":
      selectedrate = valorLibra;
      break;
  }
  const convertedValue = calculateConversion(inputValue, selectedrate);
  const descriptionText = formatedCoin(selectvalue, selectedrate);
  //Manipulando o DOM
  result.innerHTML = `R$ ${convertedValue.toFixed(2)}`;
  description.innerHTML = descriptionText;
  footer.style.display = "block";
});
