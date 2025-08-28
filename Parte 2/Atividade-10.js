
function criarArray(numero) {
    let resultado = [];
    
    for (let i = 1 ; i <= numero ; i++) {
        resultado.push(i);
    }

    return resultado;
}

let numero = 5;
console.log(criarArray(numero)); 
