
function inverterArray() {
  const arr = [];
  for (let i = 0; i < 3; i++) {
    let num = Number(prompt(`Digite o número ${i + 1}:`));
    arr.push(num);
  }
  console.log("Array original:", arr);
  arr.reverse();
  console.log("Array invertido:", arr);
}

