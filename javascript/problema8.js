function perfecto() {
    // Captura el valor ingresado en el campo de texto.
    var valorPerfecto = parseFloat(document.getElementById("NumeroPerfecto").value);
    // Verifica si el valor ingresado es un número válido.
    if (isNaN(valorPerfecto)) {
        alert("Por favor, ingresa un número válido.");
    }
    else {
        var sumaDivisores = 0;
        // Calcula la suma de los divisores del número ingresado.
        for (var i = 1; i < valorPerfecto; i++) {
            if (valorPerfecto % i === 0) {
                sumaDivisores += i;
            }
        }
        // Verifica si la suma de los divisores es igual al número ingresado para determinar si es perfecto o no.
        if (sumaDivisores === valorPerfecto) {
            document.getElementById("Perfecto").value = "El número es perfecto.";
        }
        else {
            document.getElementById("Perfecto").value = "El número no es perfecto.";
        }
    }
}
