console.log("Representação dos tipos booleanos através dos valores literais: ")
let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

console.log("\nRepresentação dos tipos booleanos através de valores duplamente negados:")
isAtivo = 1;
console.log(!!isAtivo);
isAtivo = 0;
console.log(!!isAtivo);

console.log("\nRepresentação de tipos de valores que resultam em verdadeiro no JavaScript: ");
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'Texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("\nRepresentação de tipos de valores que resultam em falso no JavaScript: ");

console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

//Existe a possibilidade de utilizar os operadores de verdadeiro ou falso em operações lógicas e obter resultados a partir dessas operações.
console.log("\nOperação lógica: ",!!('' || null || 0 || ' '))