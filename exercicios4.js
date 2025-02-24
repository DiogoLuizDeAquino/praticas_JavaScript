//Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.
const lista = ['Ovo', 'Pão', 'Maionese'];

for(let itensLista of lista){
    console.log (itensLista);
}

//Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
function imprimirListacomPosicao (lista2){
    for (let i = 0; i < lista2.length; i++) {
        console.log(`Posição: ${i}, Nome: ${lista2[i]}`);
    }
}
const array = ['Joao', 'Pedro', 'Sabrina' ];
imprimirListacomPosicao(array)

//Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
function SomaCaceta(soma){
    for(let n=0;n < soma.length; n++){
        soma += array[i];
    }

}
const array2 = [5, 5, 5, 5];
SomaCaceta(array2)


//Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.



//Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.



//Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.