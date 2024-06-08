function area() {
    /** Obtención de los datos de la base y de la altura */
    const valorBase: number = parseFloat((document.getElementById("ValorBase") as HTMLInputElement).value);
    const valorAltura: number = parseFloat((document.getElementById("ValorAltura") as HTMLInputElement).value);

    /** Verificar si alguno de los valores no es un número */
    if (isNaN(valorBase) || isNaN(valorAltura)) {
        alert("Por favor, ingresa valores numéricos en todos los campos.");

        // Si algún campo está vacío o no contiene un número válido, mostrar un mensaje de error
        (document.getElementById("ResultadoArea") as HTMLInputElement).value = "Por favor, ingresa valores numéricos en todos los campos.";
    } else {
        /** Fórmula del área de un triángulo para realizar el cálculo con los valores dados por el usuario */
        const calculoArea: number = (valorBase * valorAltura) / 2;

        /** Impresión de resultado del área de un triángulo */
        (document.getElementById("ResultadoArea") as HTMLInputElement).value = calculoArea.toFixed(2);
    }
}
