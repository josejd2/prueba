/*
En este ejercicio debes pedir dos números enteros 
y devolver el cociente de dividir el primero entre el segundo, 
pero si este es cero no debe hacer la división, sino lanzar un mensaje de error
*/

//Variables
let num1 = Number(prompt("Introduce el primer número: "));
let num2 = Number(prompt("Introduce otro número: "));
//Vamos a calcular num1 / num2 y que num2 no puede ser 0
if(num2 != 0){
    alert("El cociente es: "+num1 / num2);
}else{
    alert("El segundo número no puede ser cero");
}