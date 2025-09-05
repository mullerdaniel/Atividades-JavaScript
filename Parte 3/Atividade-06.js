
function verificarEmprestimo(salario, prestacao) {
    if (prestacao > salario * 0.2) {
        console.log("Emprestimo não pode ser feito.");

    }else {
        console.log("Emprestimo pode ser feito.")
    }
}


verificarEmprestimo(2000, 500);
verificarEmprestimo(2000, 250);