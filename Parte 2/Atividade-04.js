const prompt = require('prompt-sync')();

let i = 0;
i = parseInt(prompt("Digite um numero: "));

function ehPar(i) {
    if (i % 2 === 0) {
        return true;

    }else {
        return false;
    }
}

let resultado = ehPar(i)

if (resultado) {
    console.log("O numero é par!");

}else {
    console.log("O numero é impar!");
}