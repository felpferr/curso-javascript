const nome = "Rebeca";
const concatenacao = "Olá " + nome + "!";

console.log("Representação de uma string concatenada através de operadores: ", concatenacao);

/**Template de String.
 * 
 * Templates de Strings são utilizados para criar strings considerando vários atributos, como espaços, quebras de linhas, variáveis ou vetores e expressões.
 */
const template = `
    Olá
    ${nome}!`

console.log("\nRepresentação de uma string através de um template de String: ", template);

/**Expressões em templates são definidas por ${...}, esse formato permite criar operações de todos os tipos que terão prioridade e serão interpretadas antes de ser
 * adicionada no template da string.
 */
console.log("\nRepresentação de como é a diferença de uma string normal e uma expressão dentro do mesmo template de string: ", `1 + 1 != ${1 + 1}`);

/**Funções Arrow.
 * 
 * Funções Arrow são funções definidas em apenas uma linha de código.
 */

const up = texto => texto.toUpperCase();
console.log("\nUtilização do template de String juntamente de uma função Arrow: ",`EI... ${up('cuidado')}`);
