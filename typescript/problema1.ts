function promedio() {
    /** Obtención de los 3 valores y conversión a número flotante */
    const valor1: number = parseFloat((document.getElementById("primerValor") as HTMLInputElement).value);
    const valor2: number = parseFloat((document.getElementById("segundoValor") as HTMLInputElement).value);
    const valor3: number = parseFloat((document.getElementById("tercerValor") as HTMLInputElement).value);

    /** Verificar si alguno de los valores no es un número */
    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
        alert("Por favor, ingresa valores numéricos en todos los campos.");
        // Si algún campo está vacío o no contiene un número válido, mostrar un mensaje de error
        (document.getElementById("promedio") as HTMLInputElement).value = "Por favor, ingresa valores numéricos en todos los campos.";
    } else {
        // Cálculo del promedio de los tres números ingresados usando una fórmula básica ((n1+n2+n3)/nt)
        const calculoPromedio: number = (valor1 + valor2 + valor3) / 3;

        /** Impresión de resultado en la etiqueta promedio */
        (document.getElementById("ResultadoPromedio") as HTMLInputElement).value = calculoPromedio.toFixed(2);
    }
}
