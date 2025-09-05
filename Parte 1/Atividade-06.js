const prompt = require('prompt-sync')();

let celsius = 0.0;
let fahrenheit = 0.0;

celsius = parseFloat(prompt("Digite a temperatura em Celsius: "));
fahrenheit = (celsius * 9 / 5) + 32;

console.log("\nA temperatura em fehrenheit é: ", fahrenheit);
