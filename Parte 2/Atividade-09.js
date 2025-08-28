const prompt = require('prompt-sync')();

function contarVogais(texto) {
    const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let contador = 0;

    for (let i = 0 ; i < texto.length ; i++) {
        if (vogais.includes(texto[i])) {
            contador++;
        }
    }

    return contador;
}

let texto = "";
texto = prompt("Escreva algo: ");
console.log(contarVogais(texto)); 
