const estudante = {
    nome: 'Diogo Luiz',
    idade: 22,
    cpf: '132.002.368-77',
    turma:'RPA',
    bolsista: true,
    telefones: ['47-9999-9999', '57-5511-6677'],
    media: 7.5,
    estaAprovado: function(mediaBase) {
        return this.media >= mediaBase ? true : false
    }
}
console.log (estudante.estaAprovado(7)); 
