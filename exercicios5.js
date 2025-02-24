// 1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.
// Dica: é possível usar o spread operator diretamente em um parâmetro de função para "espalhar" seu conteúdo, por exemplo function funcaoExemplo(...params).

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = [7, 8, 9];

// function combinarArrays(...arrays) {
//     return [].concat(...arrays);
// }

// const resultado = combinarArrays(array1, array2, array3);
// console.log(resultado); // Saída: [1, 2, 3, 4, 5, 6, 7, 8, 9]



// 2 - Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.
// const valores = [5, 5, 10];
// const soma = valores.reduce((acum, atual) => atual + acum, 0)

// console.log (soma);


// 3 - Considere duas listas de cores:
// const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']
// const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']
// Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.

// function combinarArrays(...coresLista) {
//     return [...new Set([].concat(...coresLista))];
// }

// const retorno = combinarArrays(coresLista1, coresLista2);
// console.log( retorno);


// 4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.
// const lista = [1, 2, 3, 4, 5, 6];

// function removeImpares (lista){
//     return lista.filter(numero => numero % 2 == 0);
// }
// const listaSemImpares = removeImpares(lista);
// console.log(listaSemImpares);


// 5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Impares (lista){
    return lista.filter(numero => numero % 3 == 0 && numero >= 5);
}
const listaImpares = Impares(lista);
console.log(listaImpares);

// 6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.
const numeros = [43, 50, 65, 12];

const soma = numeros.reduce((acum, atual) => atual + acum, 0)

console.log(soma)