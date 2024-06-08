function factorial() {
    // Captura el valor ingresado en el campo de texto.
    const factorIngresado: number = parseFloat((document.getElementById("NumeroFactorial") as HTMLInputElement).value);

    // Verifica si el valor ingresado es un número válido.
    if (isNaN(factorIngresado)) {
        alert("Por favor, ingresa un número válido.");
    } 
    // Verifica si el valor ingresado es 0 o 1, ya que el factorial de 0 y 1 es 1.
    else if (factorIngresado === 0 || factorIngresado === 1) {
        alert("El factorial de 0 y 1 es 1. Por favor, ingresa un número mayor que 1.");
    } 
    // Calcula el factorial del número ingresado.
    else {
        let factorial = 1;
        for (let i = 2; i <= factorIngresado; i++) {
            factorial *= i;
        }
        // Muestra el factorial calculado en el campo de texto.
        (document.getElementById('Factorial') as HTMLInputElement).value = factorial.toString(); // Convierte factorial a string antes de asignarlo al campo de texto.
    }
}