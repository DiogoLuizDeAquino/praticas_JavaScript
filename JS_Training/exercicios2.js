//Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, 
//depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, 
//considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.
// Declaração das variáveis de saldo, depósito e saque
var saldo = 1000;
var deposito = 200;
var saque = 150;

// Realização das operações
var operacao = saldo + deposito - saque;

// Exibição do saldo final no console
console.log("Saldo inicial: " + saldo);
console.log("Depósito: " + deposito);
console.log("Saque: " + saque);
console.log("Saldo final: " + operacao);


//Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse 
//valor é par ou ímpar. Exiba o resultado no console.
 // Declaração de uma variável numérica
var numero = 7;

// Verificação se o número é par ou ímpar usando operador ternário
var resultado = (numero % 2 === 0) ? "O número é par" : "O número é ímpar";

// Exibição do resultado no console
console.log(resultado);


//Considere uma situação em que você está verificando se um usuário está logado e 
//tem permissão de administrador para acessar determinada funcionalidade. 
//Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.

// Declaração das variáveis booleanas
var usuarioLogado = true;
var isAdmin = false;

// Verificação se o usuário está logado e se tem permissão de administrador
if (usuarioLogado && isAdmin) {
    console.log("Acesso permitido. Usuário logado e é administrador.");
} else {
    console.log("Acesso negado. Verifique se está logado e possui permissão de administrador.");
}


//Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. 
//Exiba o resultado no console.

// Declaração de duas variáveis booleanas
var condicao1 = false;
var condicao2 = true;

// Uso do operador OR para verificar se pelo menos uma das condições é verdadeira
var resultadoOR = condicao1 || condicao2;

// Exibição do resultado no console
console.log("Pelo menos uma das condições é verdadeira: " + resultadoOR);


//Imagine um sistema que determina se um usuário tem idade suficiente 
//para comprar o ingresso para um show. 
//Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e 
//utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.

// Declaração das variáveis de idade mínima e idade do usuário
var idadeMinima = 18;
var idadeUsuario = 16;

// Verificação se o usuário pode comprar o ingresso
if (idadeUsuario >= idadeMinima) {
    console.log("Usuário tem idade suficiente para comprar o ingresso.");
} else {
    console.log("Usuário não tem idade suficiente para comprar o ingresso.");
}
