# Atividades-JavaScript

# PARTE 1:

1 - Verificar se um número é positivo, negativo ou zero.
---
2 - Calcular a média de 3 notas e mostrar a situação do aluno (aprovado, reprovado ou em exame).
---
3 - Mostrar os múltiplos de 3 entre 1 e 30.
---
4 - Calcular o fatorial de um número.
---
5 - Verificar se um ano é bissexto.
---
6 - Converter uma temperatura em Celsius para Fahrenheit.
---
7 - Verificar se uma palavra é um palíndromo.
---
8 - Some todos os números de 1 a 100 e exiba o resultado no console.
---
9 - Exiba no console a tabuada do número 5, do 1 ao 10.
---
10 - Usando um laço while, exiba no console os números de 10 a 1.
---
11 - Exiba os números de 1 a 30 com as seguintes regras:
Se divisível por 3, exiba "Fizz".
Se divisível por 5, exiba "Buzz".
Se divisível por 3 e 5, exiba "FizzBuzz".
Caso contrário, exiba o número.
---
12 - Exiba no console a sequência de números de 1 a 5 em uma única linha no formato "1-2-3-4-5".
---
13 - Exiba no console um triângulo com 5 linhas de asteriscos:
<br>*
<br>**
<br>***
<br>****
<br>*****
<br>******
<br>*******
---
14 - Declare uma variável com um texto, por exemplo, "JavaScript". Exiba no console o texto invertido ("tpircSavaJ").

---

# PARTE 2

1 - Crie uma função de declaração chamada adicionar que recebe dois números como parâmetros e retorna a soma deles.
---
2 - Crie uma função de expressão chamada subtrair que retorne a diferença entre dois números.
---
3 - Crie uma arrow function que retorna o produto de dois números.
---
4 - Crie uma função chamada ehPar que recebe um número como parâmetro e retorna true se o número for par e false caso contrário.
---
5 - Crie uma função chamada calcularMedia que recebe um array de números como parâmetro e retorna a média dos números.

* console.log(calcularMedia([1, 2, 3, 4, 5])); // 3
---
6 - Crie uma arrow function que aceite uma string e retorne a mesma string em letras maiúsculas.
---
7 - Crie uma função que aceite dois parâmetros: um array de números e um número. A função deve retornar um novo array com todos os números maiores que o número fornecido.

* let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
* let num = 5;
* console.log(filtrarNumeros(array, num)); // [6, 7, 8, 9]
---
8 - Crie uma função que aceite um array e um valor. A função deve retornar a quantidade de vezes que o valor aparece no array.

* let array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
* let valor = 4;
* console.log(contarOcorrencias(array, valor)); // 4
---
9 - Crie uma função que aceite uma string e retorne o número de vogais nessa string.

* let texto = "Exemplo de uma string qualquer";
* console.log(contarVogais(texto)); // 10
---
10 - Crie uma função que aceite um número e retorne um array com todos os números de 1 até o número fornecido, incluindo o número fornecido.

* let numero = 5;
* console.log(criarArray(numero)); // [1, 2, 3, 4, 5]
---
11 - Crie um objeto chamado carro com propriedades: marca, modelo e ano.

* Acesse a propriedade marca do objeto carro.

* Altere a propriedade ano do objeto carro para 2025.

* Adicione um método ao objeto carro chamado getIdade que retorne quantos anos o carro tem (ano atual - ano do carro).

* Adicione um método ao objeto carro chamado getDescricao que retorne uma string contendo todas as informações do carro.
---
12 - Crie uma função para retornar um número aleatório entre 1 e 100.
---
13 - Crie uma função que retorne a diferença em dias entre duas datas.
---
14 - Crie um objeto Date e defina a data para 100 dias a partir de agora.
---
15 - Crie um array chamado frutas que contém "maçã", "banana" e "laranja".

* Imprima o segundo elemento do array frutas.

* Adicione "manga" ao final do array frutas.

* Remova o primeiro elemento do array frutas.

* Verifique o tamanho do array frutas.

* Crie um loop for que percorre o array frutas e imprime cada fruta.

* Use o método forEach para imprimir cada elemento do array frutas.

* Use o método map para criar um novo array que contém o tamanho de cada fruta do array frutas.

* Use o método filter para criar um novo array que contém apenas as frutas do array frutas que têm mais de 5 caracteres.

* Use o método reduce para calcular a soma dos números em um array.

---

PARTE 3

1 - Desenvolva um algoritmo que leia um número inteiro e imprima seu sucessor e seu antecessor na tela.
---
2 - Desenvolva um algoritmo que receba um valor qualquer e imprima esse valor com reajuste de 15%.
---
3 - Desenvolva um algoritmo que calcule a distância percorrida de um veículo conforme os dados informados: Tempo em horas e velocidade média.
---
4 - Desenvolva um algoritmo que leia um número e se for maior que 20 imprima a metade desse número.
---
5 - Desenvolva um algoritmo que leia 2 números inteiros e some. Se a soma for maior que 10, mostre o resultado da soma.
---
6 - Desenvolva um algoritmo que solicite salário e prestação. Se a prestação for maior que 20% do salário, imprimir: Empréstimo não pode ser concedido.
Senão imprimir: Empréstimo pode ser concedido.
---
7 - Um comerciante comprou um produto e quer vendê-lo com lucro de 45% se o valor da compra for menor que R$20,00; caso contrário, o lucro será de 30%. Entrar com o valor do produto e imprimir o valor da venda.
---
8 - Desenvolva um algoritmo que leia a idade de uma pessoa e informe a sua classe eleitoral.
* A - Não-eleitor (abaixo de 16 anos)
* B - Eleitor obrigatório (entre 18 e 65 anos)
* C - Eleitor facultativo (entre 16 e 18 e maior de 65 anos)
---
9 - Crie uma função que recebe um array de 3 números e coloque eles em ordem crescente. Crie sua própria função para isso.
---
10 - Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array.
Modifique os elementos do array de modo a a sequência de números ficar do contrário.
* Ou seja, se digitou
* : 1,2,3
* Vai aparecer: 3,2,1
---
11 - Faça uma função que recebe um array de qualquer tamanho e ordene seus elementos na ordem crescente.
---
12 - Criar uma função que junte dois arrays e retorne o resultado como um novo array.
---
13 - Escreva uma função que informe o retorno de um investimento (montante) com base nos valores do capital inicial, tempo em meses e taxa de juros mensal.
* Use a fórmula:
* M = C * (1 + i)^t
* Onde:

* C = Capital inicial investido

* i = Taxa de juros (em percentual)

* t = Tempo do investimento (em meses)
* Exiba o resultado com duas casas decimais.
---
14 - Escreva uma função em JavaScript que conte quantas vezes um caractere aparece em uma string.
Tanto o caractere quanto a string devem ser informadas.
---
15 - Crie um objeto chamado "pessoa" que tenha as propriedades "nome", "idade" e "profissão".
Atribua valores a essas propriedades e imprima o objeto no console.
---
16 - Adicione uma nova propriedade chamada "hobbies" ao objeto "pessoa" criado anteriormente.
Atribua a essa propriedade um array de hobbies que você gosta. Imprima o objeto no console.
---
17 - Crie um array chamado "nomes" com os nomes de algumas pessoas que você conhece.

* Imprima o array no console.

* Adicione um novo nome ao final do array "nomes".

* Remova o último nome do array "nomes".

* Adicione um novo nome ao início do array "nomes".

* Remova o primeiro nome do array "nomes".
---
18 - Crie um novo array chamado "numeros" com alguns números.

* Use o método join() para transformar o array em uma string separada por vírgulas.

* Use o método reverse() para inverter a ordem dos elementos.

* Use o método slice() para criar um novo array com os dois primeiros elementos.

* Use o método sort() para ordenar o array "nomes" em ordem alfabética.

* Use o método filter() para retornar apenas os números pares.

* Use o método map() para retornar o quadrado de cada número.

* Use o método reduce() para somar todos os elementos.

* Use o método forEach() para imprimir cada elemento do array "nomes".
---
19 - Crie um novo array chamado "idades" com algumas idades.
Use o método every() para verificar se todos os elementos do array são maiores que 18. Imprima o resultado no console.
---
20 - Crie uma variável chamada "pi" que armazene o valor de π (pi) usando o método Math.PI. Imprima o valor no console.
---
21 - Crie uma variável chamada "raizQuadrada" que armazene a raiz quadrada de 64 usando o método Math.sqrt(). Imprima o valor no console.
---
22 - Crie um array chamado "frutas" com as frutas: maçã, banana e laranja.

* Acesse o segundo elemento e imprima no console.

* Adicione a fruta "morango" ao final do array.

* Remova o primeiro elemento.

* Crie um novo array chamado "numeros" com alguns números.

* Use push() para adicionar um número ao final.

* Use pop() para remover o último elemento.

* Use unshift() para adicionar um número ao início.

* Use shift() para remover o primeiro elemento.

* Crie um novo array chamado "frutas2" com as frutas: manga, abacaxi e melancia.

* Use concat() para unir "frutas" e "frutas2" em um novo array chamado "todasFrutas".

* Use slice() para obter os dois primeiros elementos de "todasFrutas".

* Use splice() para remover o segundo elemento do array.

* Use indexOf() para encontrar o índice da fruta "banana".

* Use filter() para retornar frutas que começam com a letra "m".

* Use map() para criar um novo array com o dobro de cada número do array "numeros".

* Use forEach() para imprimir cada elemento de "todasFrutas".
---
23 - Crie uma função chamada gerarSenha que recebe um número como parâmetro e retorna uma senha aleatória com esse número de caracteres.
---
24 - Crie uma função chamada gerarNumeroAleatorio que recebe um número mínimo e um número máximo como parâmetros e retorna um número aleatório entre esses dois números.
---
25 - Crie uma função chamada calculadora que recebe uma string como parâmetro contendo uma expressão matemática (ex: "2+3*4") e retorna o resultado dessa expressão.
---
26 - Crie uma função chamada converterMorse que recebe uma string em código Morse como parâmetro e retorna a mesma string em letras.