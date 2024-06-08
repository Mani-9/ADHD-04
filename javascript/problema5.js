function Potenciar() {
    // Captura los valores ingresados en los campos de texto y lo convertimos a un número decimal.
    var NumeroparaPotenciar = parseFloat(document.getElementById("ValoraElevar").value);
    var NumeroPotencia = parseFloat(document.getElementById("potencia").value);
    // Verifica si alguno de los valores ingresados no es un número.
    // Si es así, muestra una alerta indicando que se debe ingresar un número válido.
    if (isNaN(NumeroparaPotenciar) || isNaN(NumeroPotencia)) {
        alert("Por favor, ingresa un número válido.");
    }
    else {
        // Formula para realizar la potenciacion de un numero
        var calculoPotencia = (Math.pow(NumeroparaPotenciar, NumeroPotencia));
        /** Impresión de resultado del área de un triángulo */
        document.getElementById("ValorPotenciado").value = calculoPotencia.toFixed(2);
    }
}
