
function filtrarNumeros(array, numero){
    return array.filter(n => n > numero);
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numero = 5;

console.log(filtrarNumeros(array, numero));