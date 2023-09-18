//Utilizar bons nomes para identificadores (variáveis, classes, constantes, arquivos, etc...)


var a = 3; // palavra reservada para criar variáveis, porém é uma forma depreciada, pois pode redeclarar uma variável já declarada.
let b = 4; // palavra reservada para criar variáveis, é uma forma mais moderna, pois não permite criar uma variável com um nome já declarado. 

var a = 30;
b = 40;

console.log("Variáveis criadas inicialmente: " + a + ", " + b);

a = 300;
b = 400;

console.log("Variáveis criadas com os valores alterados: " + a + ", " + b);

const c = 5;

console.log("Constante definida: " + c);

// Tentar priorizar o uso de constantes no código a fim de evitar retrabalho e problemas que possam ocorrer,