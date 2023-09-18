const valores = [7.7, 8.9, 6.3, 9.2];

console.log("Tipo de um Array: ", typeof(valores));

console.log("\nRepresentação de como é um array:", valores);
console.log("\nAcessando os valores através dos índices do array: ", valores[0],valores[3]);
console.log("\nAcessando um índice do array que não existe: ", valores[4]);
//Inserindo um novo valor no array, de forma "forçada" sem utilizar um método.
valores[4] = 10;
console.log("Acessando um índice do array que passou a existir após uma inserção: ", valores[4]);

console.log("Tamanho do Array:", valores.length);

/**
 * Pelo fato da linguagem javascript ser uma linguagem fracamente tipada, é possível fazer a inserção de vários tipos em um único vetor,
 * sendo assim vetores ou arrays em javascrip são considerados heterogêneos, pois aceitam que tipos diferentes sejam inseridos num mesmo vetor.
 */
//Inserindo um novo valor no array através do método .push() que também é utilizado em arrays.
valores.push({id:1}, 1, true, "teste", 'f');
console.log("Array após a inserção de valores de diferentes tipos:", valores);

/**
 * Existem maneiras de remover valores de um vetor, exite o método .pop() que remove apenas o último item do vetor,
 * e existe a palavra reservada delete que deleta um ítem do vetor se passado o índice desse item. 
 */

valores.pop();
console.log("\nArray após a remoção do último  item através do método .pop:", valores);

delete valores[5];
console.log("\nArray após a remoção do item no índice [5] através da palavra reservada delete:", valores);
