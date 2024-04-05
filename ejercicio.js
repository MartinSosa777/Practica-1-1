const leer = require("prompt-sync")();

/* Crear un juego para adivinar el número secreto definido dentro del programa donde el usuario tendrá 3 intentos*/

const numeroSecreto=7
const RANGO_MAXIMO = 3
let numUsuario="def numero usuario"
for (let i = 0; i < RANGO_MAXIMO ; i++) {
    console.log("Decime un numero:");
    numUsuario=leer();
    if (numUsuario == numeroSecreto) {
     console.log("Adivinaste");
     i= 3    
}    else{
    console.log("Segui intentando");
}}