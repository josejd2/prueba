// Solicitar un valor entero al usuario
let num = parseInt(prompt("Introduce un valor entero:"));

// Inicializar una cadena para almacenar el resultado
let resultado = "";

// Usar un bucle for para concatenar los números desde 0 hasta el valor ingresado
for (let i = 0; i <= num; i++) {
    resultado += i; // Agregar el número a la cadena

    // Agregar una coma si no es el último número
    if (i < num) {
        resultado += ", ";
    }
}

// Mostrar el resultado
console.log(resultado);
