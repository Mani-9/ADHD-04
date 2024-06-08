function area() {
    /** Obtención de los datos de la base y de la altura */
    var valorBase = parseFloat(document.getElementById("ValorBase").value);
    var valorAltura = parseFloat(document.getElementById("ValorAltura").value);
    /** Verificar si alguno de los valores no es un número */
    if (isNaN(valorBase) || isNaN(valorAltura)) {
        alert("Por favor, ingresa valores numéricos en todos los campos.");
        // Si algún campo está vacío o no contiene un número válido, mostrar un mensaje de error
        document.getElementById("ResultadoArea").value = "Por favor, ingresa valores numéricos en todos los campos.";
    }
    else {
        /** Fórmula del área de un triángulo para realizar el cálculo con los valores dados por el usuario */
        var calculoArea = (valorBase * valorAltura) / 2;
        /** Impresión de resultado del área de un triángulo */
        document.getElementById("ResultadoArea").value = calculoArea.toFixed(2);
    }
}
