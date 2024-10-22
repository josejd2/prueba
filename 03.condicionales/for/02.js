// Solicitar un valor entero al usuario
let num = parseInt(prompt("Introduce un valor entero:"));

// Inicializar una cadena para almacenar el resultado
let resultado = "";

// Usar un bucle for para concatenar los números desde el valor ingresado hasta el 1
for (let i = num; i >= 1; i--) {
    resultado += i; // Agrega el número actual a la cadena
    if (i > 1) {
        resultado += ', '; // Añade una coma solo si no es el último número
    }
}

// Mostrar el resultado
console.log(resultado);