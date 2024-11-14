const notas = [9, 10, 7, 6];

const notasAtualizadas = notas.map((nota) => nota + 1 >= 10 ? 10 : nota + 1);

console.log (notasAtualizadas);