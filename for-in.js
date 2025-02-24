const estudante = {
    nome: 'Diogo Luiz',
    idade: 22,
    cpf: '132.002.368-77',
    turma:'RPA',
    bolsista: true,
    telefones: ['47-9999-9999', '57-5511-6677'],
    endereco: [{
        rua: 'Rua Joseph Climber',
        numero: '56',
        complemento: 'apto 43'
    },{
        rua: 'Rua dos bancarios',
        numero: '78',
        complemento: null
    }]
}

for(let chave in estudante){
    const tipo = typeof estudante[chave];
    if(tipo !== 'object' && tipo !== 'function'){
        const texto = `a chave ${chave} tem o valor ${estudante[chave]}`
        console.log(texto);

    }
    
}
