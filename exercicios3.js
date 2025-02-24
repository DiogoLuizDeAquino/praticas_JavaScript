//Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. 
//Em seguida, chame a função e exiba a saudação no console.

function nomeUser(nome){

    return`Bem vindo, ${nome}!`
}

const message = nomeUser("Diogo Luiz");
console.log (message);


//Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). 
//Imprima o resultado no console.

function idade(age){

        if(age >= 18){
            return(`Sua idade é ${age}, bem vindo!`)
        }else{
            return(`Sua idade é ${age}, entrada proibida para menores de 18 anos!`)
        }
};

console.log (idade(20));
console.log (idade(17));

//Crie uma função que receba uma string e verifique se é um palíndromo 
//(uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). 
//Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.

function Palindromo(palavra){
    const Minusculo = palavra.toLowerCase();

    const palavraReversa = Minusculo.split('').reverse().join('')//o split é para transformar a string em array pois o reverse só funciona com array.
    return Minusculo === palavraReversa; //verifica se a palavra é reversa. 
}  
console.log(Palindromo("Radar")); // true
console.log(Palindromo("arara")); // true
console.log(Palindromo("hello")); // false
console.log(Palindromo("Campanha")); // false

//Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. 
//Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. 
//Imprima o maior valor no console.

function maiorNumero(n1, n2, n3) {
    let maior;
    if (n1 > n2 && n1 > n3) {
        maior = n1;
    } else if (n2 > n1 && n2 > n3) {
        maior = n2;
    } else {
        maior = n3;
    }

    console.log(`O maior número é: ${maior}`);
    return maior;
}

maiorNumero(190, 200, 221);
