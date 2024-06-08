function InvertirTexto() {
    // Captura los valores ingresados en los campos de texto .
    const textoIn: string = (document.getElementById("TextoInvertir") as HTMLInputElement).value;
    
    // Invierte el texto.
    const textoInvertido: string = textoIn.split('').reverse().join('');

    // Muestra el texto invertido en el campo de texto de salida.
    const textoInvertidoInput = document.getElementById("TextoInvertido") as HTMLInputElement;
    textoInvertidoInput.value = textoInvertido;
}