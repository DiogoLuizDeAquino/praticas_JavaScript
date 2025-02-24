const objPessoa ={
    nome: 'José Magalhães',
    idade: 32,
    cpf: '132100224699',
    turma: 'JavaScript',
}

function exibeInfoEstudante(objEstudante, infoEstudante){
    return objEstudante[infoEstudante];
}

console.log(exibeInfoEstudante(objPessoa, 'nome'));