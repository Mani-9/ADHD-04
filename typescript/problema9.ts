function primo() {
    // Captura el valor ingresado en el campo de texto.
    const consultaPrimo: number = parseFloat((document.getElementById("NumeroPrimo") as HTMLInputElement).value);

    // Verifica si el valor ingresado es un número válido.
    if (isNaN(consultaPrimo)) {
        alert("Por favor, ingresa un número válido.");
    } else {
        let esPrimo = true;

        // Si el número es menor o igual a 1, no es primo
        if (consultaPrimo <= 1) {
            esPrimo = false;
        } else {
            // Itera desde 2 hasta la raíz cuadrada del número
            for (let i = 2; i <= Math.sqrt(consultaPrimo); i++) {
                // Si el número es divisible por algún número en ese rango, entonces no es primo
                if (consultaPrimo % i === 0) {
                    esPrimo = false;
                    break; // No es necesario continuar verificando
                }
            }
        }

        // Muestra el resultado si el número es primo o no
        const resultado = esPrimo ? "El número es primo." : "El número no es primo.";
        (document.getElementById("Primo") as HTMLInputElement).value = resultado;
    }
}
