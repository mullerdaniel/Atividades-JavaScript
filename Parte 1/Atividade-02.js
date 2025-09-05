const prompt = require('prompt-sync')();

let nota1 = 0.0;
let nota2 = 0.0;
let nota3 = 0.0;
let soma = 0.0;

nota1 = parseFloat(prompt("Digite a primeira nota: "));
nota2 = parseFloat(prompt("Digite a segunda nota: "));
nota3 = parseFloat(prompt("Digite a terceira nota: "));
soma = (nota1 + nota2 + nota3) / 3;

if (soma >= 7) {
    console.log("Você foi aprovado! Sua nota é: ", soma);

} else if (soma >= 6 && soma < 7) {
    console.log("Você está em exame! Sua nota é: ", soma);

} else if (soma < 6) {
    console.log("Você foi reprovado! Sua nota é: ", soma);
}