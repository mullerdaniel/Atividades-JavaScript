const prompt = require('prompt-sync')();

function somaMaiorQue10 (a, b) {
    soma = a + b;

    if (soma >= 10) {
        console.log(`A soma dos 2 valores é: ${soma}`);

    }else if (soma < 10){
        console.log("A soma dos 2 valores é menor que 10!");
    }
}

valor1 = Number(prompt("Digite o primeiro valor: "));
valor2 = Number(prompt("Digite o segundo valor: "));

somaMaiorQue10(valor1, valor2);