const alunos =['João', 'Juliana', 'Caio', 'Ana'];
const notas = [10, 8 , 0, 2];

const lista = [alunos, notas];

function exibeNomeENota(aluno){
    if (lista[0].includes(aluno)){
        const indice = lista[0].indexOf(aluno);
        const mediaAluno = lista[1] [indice];
        console.log(`${aluno} tem a media ${mediaAluno}`);
    } else{
        console.log('O nome digitado não existe na lista de estudantes!')
    }
}

exibeNomeENota('Juliana');
exibeNomeENota('Pedro');