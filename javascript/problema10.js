function calcularVocales() {
    // Captura el valor ingresado en el campo de texto.
    var ContarVocales = document.getElementById("NumeroVocales").value;
    // Verifica si el campo de texto está vacío
    if (ContarVocales.trim() === "") {
        alert("Por favor, ingresa un dato.");
    }
    else {
        // Convertimos el texto a minúsculas para hacer la comparación de las vocales más sencilla
        var textominuscula = ContarVocales.toLowerCase();
        // Inicializamos el contador de vocales
        var contadorVocales = 0;
        // Recorremos el texto y contamos las vocales
        for (var i = 0; i < textominuscula.length; i++) {
            // Verificamos si el carácter actual es una vocal
            if (textominuscula[i] === 'a' || textominuscula[i] === 'e' || textominuscula[i] === 'i' || textominuscula[i] === 'o' || textominuscula[i] === 'u') {
                contadorVocales++;
            }
        }
        // Mostramos el resultado en el campo de texto "Vocales"
        document.getElementById("Vocales").value = "La cantidad de vocales es: " + contadorVocales;
    }
}
