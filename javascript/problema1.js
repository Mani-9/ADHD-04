function promedio() {

    /** Obtención de los 3 valores y conversión a número flotante */
    var valor1 = parseFloat(document.getElementById("primerValor").value);
    var valor2 = parseFloat(document.getElementById("segundoValor").value);
    var valor3 = parseFloat(document.getElementById("tercerValor").value);

    /** Verificar si alguno de los valores no es un número */
    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
        alert("Por favor, ingresa valores numéricos en todos los campos.");

        // Si algún campo está vacío o no contiene un número válido, mostrar un mensaje de error
        document.getElementById("promedio").value = "Por favor, ingresa valores numéricos en todos los campos.";
    }
    else {

        // Cálculo del promedio de los tres números ingresados usando una fórmula básica ((n1+n2+n3)/nt)
        
        var calculoPromedio = (valor1 + valor2 + valor3) / 3;
        /** Impresión de resultado en la etiqueta promedio */
        document.getElementById("ResultadoPromedio").value = calculoPromedio.toFixed(2);
    }
}
