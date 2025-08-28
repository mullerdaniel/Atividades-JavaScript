const prompt = require('prompt-sync')();

function diferenciaDatas(dataAtual, dataAtualizada) {

    let data1 = new Date(dataAtual.split('/').reverse().join('/'));
    let data2 = new Date(dataAtualizada.split('/').reverse().join('/'));

    let diferencaMs = Math.abs(data1 - data2);

    let diferencaDias = Math.floor(diferencaMs / (1000 * 60 * 60 * 24));

    return diferencaDias;
}

let dataAtual = prompt("Digite uma data (EX: 01/01/2000): ");
let dataAtualizada = prompt("Digite uma data nova (EX: 01/01/2000): ");

console.log(`A diferença entre as datas é de ${diferenciaDatas(dataAtual, dataAtualizada)} dias.`);
