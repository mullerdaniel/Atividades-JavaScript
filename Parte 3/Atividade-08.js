const prompt = require('prompt-sync')();

function classeEleitoral(idade) {
  if (idade < 16) {
    console.log("Não-eleitor");

  } else if ((idade >= 18 && idade <= 65)) {
    console.log("Eleitor obrigatório");

  } else if ((idade >= 16 && idade < 18) || (idade > 65)) {
    console.log("Eleitor facultativo");
  }
}


idadeAtual = Number(prompt("Digite a sua idade: "));
classeEleitoral(idadeAtual);
