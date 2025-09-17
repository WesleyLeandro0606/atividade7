const cotacaoEuro = 5.10
const cotacaoDolar = 5.70
let valor = 70.00
let valorDolar = valor * cotacaoDolar
let valorEuro = valor * cotacaoEuro
console.log (valorDolar.toLocaleString("un-Us", {style: "currency" , currency: "USD"}))
console.log (valorEuro.toLocaleString("de-DE", {style: "currency" , currency: "EUR"}))







