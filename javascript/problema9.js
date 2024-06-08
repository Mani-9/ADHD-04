function primo() {
    // Captura el valor ingresado en el campo de texto.
    var consultaPrimo = parseFloat(document.getElementById("NumeroPrimo").value);
    // Verifica si el valor ingresado es un número válido.
    if (isNaN(consultaPrimo)) {
        alert("Por favor, ingresa un número válido.");
    }
    else {
        var esPrimo = true;
        // Si el número es menor o igual a 1, no es primo
        if (consultaPrimo <= 1) {
            esPrimo = false;
        }
        else {
            // Itera desde 2 hasta la raíz cuadrada del número
            for (var i = 2; i <= Math.sqrt(consultaPrimo); i++) {
                // Si el número es divisible por algún número en ese rango, entonces no es primo
                if (consultaPrimo % i === 0) {
                    esPrimo = false;
                    break; // No es necesario continuar verificando
                }
            }
        }
        // Muestra el resultado si el número es primo o no
        var resultado = esPrimo ? "El número es primo." : "El número no es primo.";
        document.getElementById("Primo").value = resultado;
    }
}
