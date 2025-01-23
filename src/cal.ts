function calcular(operation: string): void {
    const N1 = parseFloat((<HTMLInputElement>document.getElementById("N1")).value);
    const N2 = parseFloat((<HTMLInputElement>document.getElementById("N2")).value);
    const resultadoElement = document.getElementById("resultado") as HTMLElement;
  
    if (isNaN(N1) || isNaN(N2)) {
      resultadoElement.textContent = "Por favor, ingresa números válidos.";
      return;
    }
  
    let resultado: number;
  
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
        resultado = N2!== 0 ? N1 / N2: NaN;
        break;
      default:
        resultadoElement.textContent = "Operación no válida.";
        return;
    }
  
    resultadoElement.textContent = isNaN(resultado) ? "Error: No se puede dividir por cero." : resultado.toString();
  }
  