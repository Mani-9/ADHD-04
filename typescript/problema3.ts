function determinarParOImpar() {
    // Captura el valor ingresado
    const valorConsulta: number =  parseFloat((document.getElementById("NumeroConsultado") as HTMLInputElement).value);

    // Verifica si el valor es un número
    if (isNaN(valorConsulta)) {
        alert("Por favor, ingresa un número válido.");   
    } else {
        // Determina si el número es par o impar
        if (valorConsulta % 2 === 0) {
            (document.getElementById("ParoImpar") as HTMLInputElement).value = "El número ingresado es par.";
        } else {
            (document.getElementById("ParoImpar") as HTMLInputElement).value = "El número ingresado es impar.";
        }
    }
}
