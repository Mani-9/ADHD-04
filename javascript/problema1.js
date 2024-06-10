var CalculadoraPromedio = /** @class */ (function () {
    function CalculadoraPromedio() {
        this.valor1 = 0;
        this.valor2 = 0;
        this.valor3 = 0;
    }
    /** Obtiene los valores de los campos de entrada */
    CalculadoraPromedio.prototype.obtenerValores = function () {
        this.valor1 = parseFloat(document.getElementById("primerValor").value);
        this.valor2 = parseFloat(document.getElementById("segundoValor").value);
        this.valor3 = parseFloat(document.getElementById("tercerValor").value);
    };
    /** Verifica si el valor es un número válido */
    CalculadoraPromedio.prototype.esValido = function (valor) {
        return !isNaN(valor);
    };
    /** Calcula el promedio de los tres valores ingresados */
    CalculadoraPromedio.prototype.calcularPromedio = function () {
        if (this.esValido(this.valor1) && this.esValido(this.valor2) && this.esValido(this.valor3)) {
            return (this.valor1 + this.valor2 + this.valor3) / 3;
        }
        else {
            return null;
        }
    };
    /** Muestra el resultado del promedio en el campo de salida */
    CalculadoraPromedio.prototype.mostrarResultado = function () {
        var promedio = this.calcularPromedio();
        var campoResultado = document.getElementById("ResultadoPromedio");
        if (promedio !== null) {
            campoResultado.value = promedio.toFixed(2);
        }
        else {
            alert("Por favor, ingresa valores numéricos en todos los campos.");
            campoResultado.value = "Error: valores no válidos.";
        }
    };
    return CalculadoraPromedio;
}());
// Crear una instancia de la clase CalculadoraPromedio
var calculadora = new CalculadoraPromedio();
// Función que se llama al presionar el botón para calcular el promedio
function calcularPromedio() {
    calculadora.obtenerValores();
    calculadora.mostrarResultado();
}
