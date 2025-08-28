
function fatorial(i) {
    let resultado = 1;

    for (let n = 1 ; n <= i ; n++){
        resultado *= n;
    }

    return resultado;
}


console.log(fatorial(10));