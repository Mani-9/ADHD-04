function InvertirTexto() {
    // Captura los valores ingresados en los campos de texto .
    var textoIn = document.getElementById("TextoInvertir").value;
    // Invierte el texto.
    var textoInvertido = textoIn.split('').reverse().join('');
    // Muestra el texto invertido en el campo de texto de salida.
    var textoInvertidoInput = document.getElementById("TextoInvertido");
    textoInvertidoInput.value = textoInvertido;
}
