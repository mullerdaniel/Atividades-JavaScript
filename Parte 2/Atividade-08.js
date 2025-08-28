
function contarOcorrencias (array, valor){ 
    return array.filter(item => item === valor).length;
}



let array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4,];
let valor = 4;
console.log(contarOcorrencias(array, valor));