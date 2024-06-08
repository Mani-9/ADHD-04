function perfecto() {
    // Captura el valor ingresado en el campo de texto.
    const valorPerfecto: number = parseFloat((document.getElementById("NumeroPerfecto") as HTMLInputElement).value);

    // Verifica si el valor ingresado es un número válido.
    if (isNaN(valorPerfecto)) {
        alert("Por favor, ingresa un número válido.");
    } else {
        let sumaDivisores = 0;
        // Calcula la suma de los divisores del número ingresado.
        for (let i = 1; i < valorPerfecto; i++) {
            if (valorPerfecto % i === 0) {
                sumaDivisores += i;
            }
        }

        // Verifica si la suma de los divisores es igual al número ingresado para determinar si es perfecto o no.
        if (sumaDivisores === valorPerfecto) {
            (document.getElementById("Perfecto") as HTMLInputElement).value = "El número es perfecto.";
        } else {
            (document.getElementById("Perfecto") as HTMLInputElement).value = "El número no es perfecto.";
        }
    }
}
