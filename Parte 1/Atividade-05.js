
function anoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) | (ano % 400 === 0)){
        console.log("O ano é bissexto!");
    
    }else {
        console.log("O ano não é bissexto!");
    }
}

console.log(anoBissexto(2025));
console.log(anoBissexto(2003));
console.log(anoBissexto(2000));
console.log(anoBissexto(1975));