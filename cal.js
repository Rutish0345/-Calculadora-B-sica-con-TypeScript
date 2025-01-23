"use strict";
function calcular(operation) {
    const N1 = parseFloat(document.getElementById("N1").value);
    const N2 = parseFloat(document.getElementById("N2").value);
    const resultadoElement = document.getElementById("resultado");
    if (isNaN(N1) || isNaN(N2)) {
        resultadoElement.textContent = "Por favor, ingresa números válidos.";
        return;
    }
    let resultado;
    switch (operation) {
        case "+":
            resultado = N1 + N2;
            break;
        case "-":
            resultado = N1 - N2;
            break;
        case "*":
            resultado = N1 * N2;
            break;
        case "/":
            resultado = N2 !== 0 ? N1 / N2 : NaN;
            break;
        default:
            resultadoElement.textContent = "Operación no válida.";
            return;
    }
    resultadoElement.textContent = isNaN(resultado) ? "Error: No se puede dividir por cero." : resultado.toString();
}
