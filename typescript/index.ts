function calcularPromedio(): void {
    const valor1 = parseFloat((document.getElementById('primerValor') as HTMLInputElement).value);
    const valor2 = parseFloat((document.getElementById('segundoValor') as HTMLInputElement).value);
    const valor3 = parseFloat((document.getElementById('tercerValor') as HTMLInputElement).value);

    console.log(`Valor 1: ${valor1}, Valor 2: ${valor2}, Valor 3: ${valor3}`);

    if (!isNaN(valor1) && !isNaN(valor2) && !isNaN(valor3)) {
        const promedio = ((valor1 + valor2 + valor3) / 3);
        (document.getElementById('promedio') as HTMLInputElement).value = promedio.toFixed(2);
        console.log(`Promedio: ${promedio.toFixed(2)}`);
    } else {
        alert('Por favor, ingrese valores válidos.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const calcularButton = document.getElementById('calcularButton');
    if (calcularButton) {
        calcularButton.addEventListener('click', () => calcularPromedio());
    } else {
        console.error('El botón calcularButton no se encontró.');
    }
});
