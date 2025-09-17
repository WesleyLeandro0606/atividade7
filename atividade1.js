const cotacaoEuro = 5.10
const cotacaoDolar = 5.70
let valor = 70.00
console.log (valor.toLocaleString("un-Us", {style: "currency" , currency: "USD"}))
console.log (valor.toLocaleString("de-DE", {style: "currency" , currency: "EUR"}))







 let texto1 = "Texto Demonstrativo"
 console.log("quantidade de caracteres:" , texto1.length)
 console.log("maiusculo" , texto1.toUpperCase())
 console.log("maiusculo" , texto1.toLowerCase())

 let preco1 = 25.3456
 console.log("preco" , preco1.toFixed(2))
 console.log(preco1.toLocaleString("pt-BR", {style: "currency", currency:"BRL"}))

 let textoNumero = "123"
 console.log(typeof(Number(textoNumero)))

 let numero = 495
 console.log("Residencia numero:" , numero.toString())