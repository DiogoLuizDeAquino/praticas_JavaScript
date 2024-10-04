//- 1)Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) 
//e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.

var numero =  200;
var texto =  'texto';
var sera = false;
console.log(typeof numero, typeof texto, typeof sera);

//Crie duas variáveis, uma contendo seu primeiro nome e outra contendo 
//seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e 
//em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console.

var name = "Diogo";
var last_name = "Aquino";

var full_name = name + " " + last_name;

var name_to_string = `${name} ${last_name}`;

console.log(full_name);
console.log("Variável como STRING: ", name_to_string);


//Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, combine-as em 
//uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.

var valor = 100;
var cifra = "R$";

var valor_com_cifra = `Valor é ${valor} em ${cifra} `;

console.log(valor_com_cifra);


//Crie uma variável inicializada com um valor de qualquer tipo e, 
//em seguida, reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.

let tipo = "Teste";

console.log("Valor Incial:", tipo);

tipo = 100;

console.log("Novo Valor:", tipo);


//Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem 
//informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.

var Chovendo = false;
    if (Chovendo == true){
        console.log("Leve guarda-chuva, está chovendo!")
    }else{
        console.log("Não está chovendo, não leve guarda chuva.")
    }


