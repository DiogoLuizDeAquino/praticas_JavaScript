const estudanteReprovou =  (notaFinal, Faltas) => {

    if (notaFinal < 7 && Faltas > 4) {
        return true;
    }else{
        return false;
        }

}

// Função de calculadora simples
function calculadoraSimples(a, b, operacao) {
    let resultado;
    if (operacao === 'soma') {
        resultado = a + b;
    } else if (operacao === 'subtracao') {
        resultado = a - b;
    } else if (operacao === 'multiplicacao') {
        resultado = a * b;
    } else if (operacao === 'divisao') {
        resultado = a / b;
    } else {
        resultado = 'Operação não reconhecida';
    }
    return resultado;
}

