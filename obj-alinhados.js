const estudante = {
nome: 'José Magalhães',
idade: 32,
cpf: '132100224699',
turma: 'JavaScript',
bolsista: true,
telefones: ['55400289880', '5547992145678'],
endereco: [{
    rua:'Rua do boquete',
    numero: 45,
    complemento: 'apto-45',
    }]
}
//endereço 2
estudante.endereco.push({
        rua: 'Rua da xoxota',
        numero: 69,
        complemento: ''
    })

// console.log(estudante.endereco);
// console.log(estudante.endereco[1]);

const listaEnderecoComComplemento = estudante.endereco.filter((endereco)=> endereco.complemento);

console.log(listaEnderecoComComplemento);