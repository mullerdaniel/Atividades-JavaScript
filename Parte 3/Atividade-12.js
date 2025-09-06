
function juntarArrays(arr1, arr2) {
  const novoArray = [];
  for (let el of arr1) {
    novoArray.push(el);
  }
  for (let el of arr2) {
    novoArray.push(el);
  }
  return novoArray;
}

console.log(juntarArrays([1, 2], [3, 4])); 
