
let frutas = ["maçã", "banana", "laranja"];

console.log(frutas[1]); 

frutas.push("manga");
console.log(frutas); 

frutas.shift();
console.log(frutas);

console.log(frutas.length);  

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

frutas.forEach((fruta) => {
    console.log(fruta);
});

let tamanhosFrutas = frutas.map((fruta) => fruta.length);
console.log(tamanhosFrutas); 

let frutasGrandes = frutas.filter((fruta) => fruta.length > 5);
console.log(frutasGrandes); 

let numeros = [1, 2, 3, 4, 5];  
let soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(soma);
