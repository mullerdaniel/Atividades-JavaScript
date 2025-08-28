let carro = {
    marca: "Renault",
    modelo: "Stepway",
    ano: 2024,

    getIdade: function(){
        let anoAtual = new Date().getFullYear();
        return anoAtual - this.ano;
    },

    getDescricao: function(){
        return `Marca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}`;
    }
};

console.log(carro.marca);
carro.ano = 2025;

console.log(carro.getDescrisao);
console.log(`Idade do carro ${carro.getIdade()} anos`);