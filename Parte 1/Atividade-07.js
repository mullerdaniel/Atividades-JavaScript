const prompt = require('prompt-sync')();

let palavra = "";
let palavraInvertida = "";

function Palindromo(palavra) {

    palavra = palavra.toLowerCase();
    palavraInvertida = palavra.split("").reverse().join("");
    return palavra === palavraInvertida;
}

palavra = prompt("Escreva uma palavra: ");

if (Palindromo(palavra)){
    console.log(`A "${palavra}" é um polindromo!`)

}else {
    console.log(`A "${palavra}" não é um polindromo!`)
}