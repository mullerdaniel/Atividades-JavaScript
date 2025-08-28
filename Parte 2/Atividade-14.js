
let conta = {
    saldo: 0,
    titular: "",

    depositar: function(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Deposito de R$${valor} realizado com sucesso!`);
        } else {
            console.log("O valor do deposito deve ser positivo.");
        }
    },

    sacar: function(valor) {
        if (valor <= 0) {
            console.log("O valor do saque deve ser positivo.");
        } else if (valor > this.saldo) {
            console.log("Saldo insuficiente.");
        } else {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso!`);
        }
    },

    verSaldo: function() {
        console.log(`Saldo atual: R$${this.saldo}`);
    }
};

conta.titular = "Gustavo";

conta.depositar(2000); 
conta.sacar(450);     
conta.verSaldo();    

conta.sacar(1150);   
