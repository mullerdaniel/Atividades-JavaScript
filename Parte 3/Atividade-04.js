const prompt = require('prompt-sync')();

function metadeMaiorQue20 (numero) {
    if (numero >= 20) {
        numero = numero / 2;
        console.log(`\nMetade do numero é ${numero}`);

    }else if (numero < 20) {
        console.log("\nNumero não é maior que 20.");
    }
}

numero1 = prompt("Digite um numero: ");
metadeMaiorQue20(numero1);