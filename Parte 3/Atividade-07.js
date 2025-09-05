
function valorVenda(valorCompra) {
  let lucroPercentual;

  if (valorCompra < 20) {
    lucroPercentual = 0.45;
  } else {
    lucroPercentual = 0.30;
  }

  let valorVenda = valorCompra * (1 + lucroPercentual);
  console.log("Valor da venda: R$ " + valorVenda);
}

valorVenda(15); 
valorVenda(25); 
