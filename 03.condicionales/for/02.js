function cuentaAtras(numero) {
    let resultado = '';
    
    for (let i = numero; i >= 0; i--) {
        resultado += i; // Agrega el número actual a la cadena
        if (i > 0) {
            resultado += ', '; // Añade una coma solo si no es el último número
        }
    }
    
    return resultado;
}

// Ejemplo de uso
let numeroTeclado = parseInt(prompt("Introduce un número entero:"));
if (!isNaN(numeroTeclado) && numeroTeclado >= 0) {
    console.log(cuentaAtras(numeroTeclado));
} else {
    console.log("Por favor, introduce un número entero válido.");
}
