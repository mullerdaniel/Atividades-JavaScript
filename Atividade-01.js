const prompt = require('prompt-sync')();

let numero = 0;

numero = parseInt(prompt("Digite um numero: "));

if (numero > 0) {
    console.log("O numero que você escreveu é positivo!");

} else if (numero < 0) {
    console.log("O numero que você escolheu é negativo");

} else if (numero == 0) {
    console.log("O numero que você escolheu é 0");

} else {
    console.log("Você não escreveu um numero!")
}