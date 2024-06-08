function ValorMayoryMenor() {
    // Captura los valores ingresados en los campos de texto y lo convertimos a un número decimal.
    var PrimerIngreso = parseFloat(document.getElementById("PrimerValor").value);
    var SegundoIngreso = parseFloat(document.getElementById("SegundoValor").value);
    var TercerIngreso = parseFloat(document.getElementById("TercerValor").value);
    // Verifica si alguno de los valores ingresados no es un número.
    // Si es así, muestra una alerta indicando que se debe ingresar un número válido.
    if (isNaN(PrimerIngreso) || isNaN(SegundoIngreso) || isNaN(TercerIngreso)) {
        alert("Por favor, ingresa un número válido.");
    }
    else if (PrimerIngreso === SegundoIngreso || PrimerIngreso === TercerIngreso || SegundoIngreso === TercerIngreso) {
        // Verifica si alguno de los números es igual a otro.
        alert("Por favor, ingresa números distintos.");
    }
    else {
        // Determina cuál es el valor mayor entre los tres valores ingresados.
        if (PrimerIngreso >= SegundoIngreso && PrimerIngreso >= TercerIngreso) {
            document.getElementById("ValorMayor").value = "El valor mayor es: " + PrimerIngreso;
        }
        else if (SegundoIngreso >= TercerIngreso && SegundoIngreso >= PrimerIngreso) {
            document.getElementById("ValorMayor").value = "El valor mayor es: " + SegundoIngreso;
        }
        else {
            document.getElementById("ValorMayor").value = "El valor mayor es: " + TercerIngreso;
        }
        // Determina cuál es el valor menor entre los tres valores ingresados.
        if (PrimerIngreso <= SegundoIngreso && PrimerIngreso <= TercerIngreso) {
            document.getElementById("ValorMenor").value = "El valor menor es: " + PrimerIngreso;
        }
        else if (SegundoIngreso <= TercerIngreso && SegundoIngreso <= PrimerIngreso) {
            document.getElementById("ValorMenor").value = "El valor menor es: " + SegundoIngreso;
        }
        else {
            document.getElementById("ValorMenor").value = "El valor menor es: " + TercerIngreso;
        }
    }
}
