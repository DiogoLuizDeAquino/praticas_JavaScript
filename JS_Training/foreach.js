const notas = [10, 6, 8.5, 0];

let somaDasNotas = 0;
notas.forEach(function(nota){
    somaDasNotas += nota;
})
const media = somaDasNotas / notas.length;

console.log(`a média das notas é ${media}`);
