function calcularPromedio() {
    var valor1 = parseFloat(document.getElementById('primerValor').value);
    var valor2 = parseFloat(document.getElementById('segundoValor').value);
    var valor3 = parseFloat(document.getElementById('tercerValor').value);
    console.log("Valor 1: ".concat(valor1, ", Valor 2: ").concat(valor2, ", Valor 3: ").concat(valor3));
    if (!isNaN(valor1) && !isNaN(valor2) && !isNaN(valor3)) {
        var promedio = ((valor1 + valor2 + valor3) / 3);
        document.getElementById('promedio').value = promedio.toFixed(2);
        console.log("Promedio: ".concat(promedio.toFixed(2)));
    }
    else {
        alert('Por favor, ingrese valores válidos.');
    }
}
document.addEventListener('DOMContentLoaded', function () {
    var calcularButton = document.getElementById('calcularButton');
    if (calcularButton) {
        calcularButton.addEventListener('click', function () { return calcularPromedio(); });
    }
    else {
        console.error('El botón calcularButton no se encontró.');
    }
});
