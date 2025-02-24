const listaCPFs = ['132100224699', '12345678999'];
const infoPessoa = ['nome', 'José Magalhães', 'idade', 32];

console.log(infoPessoa[1]);

const objPessoa ={
    nome: 'José Magalhães',
    idade: 32,
    cpf: '132100224699',
    turma: 'JavaScript',
}

console.log(objPessoa.cpf);
console.log(`O nome da pessoa é ${objPessoa.nome}`);
console.log(`Os três primeiros números do cpf da pessoa ${objPessoa.nome} é ${objPessoa.cpf.substring(0, 3)}.`);