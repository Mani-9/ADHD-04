function Potenciar() {
    // Captura los valores ingresados en los campos de texto y lo convertimos a un número decimal.
    const NumeroparaPotenciar: number = parseFloat((document.getElementById("ValoraElevar") as HTMLInputElement).value);
    const NumeroPotencia: number = parseFloat((document.getElementById("potencia") as HTMLInputElement).value);

    // Verifica si alguno de los valores ingresados no es un número.
    // Si es así, muestra una alerta indicando que se debe ingresar un número válido.
    if (isNaN(NumeroparaPotenciar) || isNaN(NumeroPotencia)) {
        alert("Por favor, ingresa un número válido.");
    }else{
          // Formula para realizar la potenciacion de un numero
          const calculoPotencia: number = (NumeroparaPotenciar ** NumeroPotencia) ;

          /** Impresión de resultado del área de un triángulo */
          (document.getElementById("ValorPotenciado") as HTMLInputElement).value = calculoPotencia.toFixed(2);
    
    }
}