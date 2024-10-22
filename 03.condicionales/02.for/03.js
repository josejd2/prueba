// Solicitar un valor entero al usuario
let num = parseInt(prompt("Introduce un valor entero:"));

// Inicializar una lista para almacenar el resultado 
let resultado = [];

// Usar un bucle for para concatenar los números pares desde el 0 hasta el valor ingresado
for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
        resultado.push(i);
    }
}

// Mostrar el resultado
console.log(resultado.toString());