
function calculadoraMedia(numeros) {
    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma / numeros.length;

}

console.log(calculadoraMedia([1, 2, 3, 4, 5]));