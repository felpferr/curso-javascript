const escola = "COD3R";

console.log("Valor do Índice 4 na string '" + escola + "' é: " + escola.charAt(4));//O método da classe string .charAt() retorna um caractere da string através da posisição informada no parâmentro do método. 
console.log("Valor do Índice 5 na string '" + escola + "' é: " + escola.charAt(5));//Informar uma posição inválida de pesquisa na string atráves do método .charAt() não gera um ERRO pois o javaScript é mais permissivo.

//O método .charCodeAt() busca o valor do índice informado na string, este método retorna o valor do índice da tabela ASCII.
console.log("\nValor da tabela ASCII do índice 3: " + escola.charCodeAt(3));

//O método .indexOf() recebe como parâmetro um caractere para ser buscado e retorna o índice em que o caractere está.
console.log("\nÍndice onde está o caractere 'R' na string: " + escola.indexOf("R"));

//Quando o caracter buscado através do método .índexOf() não existir na string, o método retorna -1.
console.log("Índice onde está o caractere 'G' na string: " + escola.indexOf("G"));

//O método .subString() recebe como parâmetro um índice e a partir desse índice ele irá retornar uma String formada apenas do índice informado adiante.
console.log("\nString formada a partir do índice 2 da String '" + escola + "': " + escola.substring(2));
console.log("String formada a partir do índice '0' com três caracteres de tamanho: " + escola.substring(0,3));

//O método .concat() recebe uma string (literal ou valor definido em uma variável) e junta com outra string.
console.log("\nVárias strings concatenadas através do método .concat(): " + 'Escola '.concat(escola).concat("!"));

//O método .replace() recebe dois parâmetros, o primeiro é o índice onde será alterado o caracter e o seugundo parâmetro é o valor que irá subistituir o índice. 
console.log("Trocando o número '3' na string - " + escola + " - pela letra 'E': " + escola.replace(3, "E"));

//O método .split() recebe como parâmetro um valor como critério para separar uma string no formato de um vetor(array), e retorna um vetor de strings.
console.log("\nTransformando a string - Felipe, Mariana, Cod3r - em um vetor: ", "Felipe, Mariana, Cod3r".split(","));