function determinarParOImpar() {
    // Captura el valor ingresado
    var valorConsulta = parseFloat(document.getElementById("NumeroConsultado").value);
    // Verifica si el valor es un número
    if (isNaN(valorConsulta)) {
        alert("Por favor, ingresa un número válido.");
    }
    else {
        // Determina si el número es par o impar
        if (valorConsulta % 2 === 0) {
            document.getElementById("ParoImpar").value = "El número ingresado es par.";
        }
        else {
            document.getElementById("ParoImpar").value = "El número ingresado es impar.";
        }
    }
}
