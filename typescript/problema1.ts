class CalculadoraPromedio {
    private valor1: number;
    private valor2: number;
    private valor3: number;

    constructor() {
        this.valor1 = 0;
        this.valor2 = 0;
        this.valor3 = 0;
    }

    /** Obtiene los valores de los campos de entrada */
    public obtenerValores(): void {
        this.valor1 = parseFloat((document.getElementById("primerValor") as HTMLInputElement).value);
        this.valor2 = parseFloat((document.getElementById("segundoValor") as HTMLInputElement).value);
        this.valor3 = parseFloat((document.getElementById("tercerValor") as HTMLInputElement).value);
    }

    /** Verifica si el valor es un número válido */
    private esValido(valor: number): boolean {
        return !isNaN(valor);
    }

    /** Calcula el promedio de los tres valores ingresados */
    public calcularPromedio(): number | null {
        if (this.esValido(this.valor1) && this.esValido(this.valor2) && this.esValido(this.valor3)) {
            return (this.valor1 + this.valor2 + this.valor3) / 3;
        } else {
            return null;
        }
    }

    /** Muestra el resultado del promedio en el campo de salida */
    public mostrarResultado(): void {
        const promedio = this.calcularPromedio();
        const campoResultado = document.getElementById("ResultadoPromedio") as HTMLInputElement;

        if (promedio !== null) {
            campoResultado.value = promedio.toFixed(2);
        } else {
            alert("Por favor, ingresa valores numéricos en todos los campos.");
            campoResultado.value = "Error: valores no válidos.";
        }
    }
}

// Crear una instancia de la clase CalculadoraPromedio
const calculadora = new CalculadoraPromedio();

// Función que se llama al presionar el botón para calcular el promedio
function calcularPromedio(): void {
    calculadora.obtenerValores();
    calculadora.mostrarResultado();
}
