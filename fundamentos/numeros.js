const peso1 = 1.0;
const peso2 = Number('2.0');

console.log("Exibindo os valores da constantes:\n" + "Peso1: " + peso1 + "\nPeso2: " + peso2);
console.log("\nA constante peso1 é um inteiro? -> " + Number.isInteger(peso1));
console.log("A constante peso2 é um inteiro apesar de ter seu valor definido a partir de um typecast? -> " + Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log("\nValor da constante média representado com apenas duas casas decimais, utilizando o método estático -> .toFixed(): " + media.toFixed(2));
console.log("Valor da constante média representado no formato de string, utilizando o método estático -> .toString(): " + media.toString());
console.log("Valor da constante média representado no formato binário, através da utilização de um argumento no método .toString(2): " + media.toString(2));
console.log("Tipo da constante média, através da palavra reservada typeof: " + typeof media);
//Number com N maiúsculo é diferente de number com n minúsculo
console.log("Number com seu tipo representado, através da palavra reservada typeof Number: " + typeof Number);