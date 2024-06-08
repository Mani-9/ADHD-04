function factorial() {
    // Captura el valor ingresado en el campo de texto.
    var factorIngresado = parseFloat(document.getElementById("NumeroFactorial").value);
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
        var factorial_1 = 1;
        for (var i = 2; i <= factorIngresado; i++) {
            factorial_1 *= i;
        }
        // Muestra el factorial calculado en el campo de texto.
        document.getElementById('Factorial').value = factorial_1.toString(); // Convierte factorial a string antes de asignarlo al campo de texto.
    }
}
