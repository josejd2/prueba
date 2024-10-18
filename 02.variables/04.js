/*
En este ejercicio vas a pedir al usuario que teclee tres números enteros 
y el script mostrará como resultado el valor medio de los tres.

Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3.
*/

let numero1 = Number(prompt("Teclee 1 numero entero: "));
let numero2 = Number(prompt("Teclee otro numero entero: "));
let numero3 = Number(prompt("Teclee otr numero entero: "));

let media = numero1 + numero2 + numero3 / 3;
document.getElementById("media").innerText += media;