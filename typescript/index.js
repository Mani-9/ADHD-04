function promedio() {
    /**Obtencion de los 3 valores y conversion a numero floatante */
    var valor1 = parseFloat(document.getElementById("primerValor").value);
    var valor2 = parseFloat(document.getElementById("segundoValor").value);
    var valor3 = parseFloat(document.getElementById("tercerValor").value);
    // Verificar si alguno de los valores es NaN (Not a Number)
    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
        // Si algún campo está vacío o no contiene un número válido, mostrar un mensaje de error
        document.getElementById("promedio").value = "Por favor, ingresa valores numéricos en todos los campos.";
    }
    else {
        // Calculo del promedio de los tres numeros ingresados usando una formula basica ((n1+n2+n3)/nt)
        var calculoPromedio = ((valor1 + valor2 + valor3) / 3);
        /**Impresion de resultado en la label promedio */
        document.getElementById("ResultadoPromedio").value = calculoPromedio.toFixed(2);
    }
}
