// Pedir datos al usuario
var nombre = prompt("Ingresa tu nombre:");
var edad = prompt("Ingresa tu edad:");
var estatura = prompt("Ingresa tu estatura:");
var peso = prompt("Ingresa tu peso:");

document.getElementById("nombre").textContent = nombre;
document.getElementById("edad").textContent = edad;
document.getElementById("estatura").textContent = estatura;
document.getElementById("peso").textContent = peso;

// Mostrar un mensaje con los datos en la consola
console.log("Datos:");
console.log("Nombre: " + nombre);
console.log("Edad: " + edad);
console.log("Estatura: " + estatura + " cm");
console.log("Peso: " + peso + " kg");
