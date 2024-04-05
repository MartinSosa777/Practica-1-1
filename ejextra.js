const leer = require("prompt-sync")();

/* Crear un juego para adivinar el número secreto generado aleatoriamente en un rango del cero al doble de la cantidad de intentos que desea tener el usuario, considerar que la cantidad mínima de intentos es 3 por ende el rango mínimo del número secreto es de 0 a 6*/

const RANGO_MIN=3
let numeroIngresado=0
let cantIntentos=0
console.log("Cuantos intentos deseas tener del 3 al 10?");
cantIntentos=Number(leer());
if (cantIntentos<3) {
    console.log("No es valido");
    console.log("El rango minimo de intentos es 3");
}else if (cantIntentos>10) {
    console.log("No es valido");
    console.log("El rango maximo de intentos es 10");
}else{
numeroSecreto=Math.floor(Math.random() *((cantIntentos*2)+1));
console.log ("El numero secreto es:", numeroSecreto);
for (let i = 0; i<cantIntentos ; i++) {
    console.log("Decime un numero:");
    numeroIngresado=leer();
    if (numeroIngresado == numeroSecreto) {
     console.log("Adivinaste");
    i=cantIntentos
}    else{
    console.log("Segui intentando");
    
}}}