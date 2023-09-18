let valor;
//Uma variável que não é inicializada, por padrão será undefined pois não tem valor definido/inicalizado.  
console.log("A variável 'valor' foi apenas criada, não foi inicializada, sendo assim a variável 'valor' é: ", valor);

valor = null;
//Uma variável com o valor null, não possui nenhum tipo de valor ou referência, mesmo se ocorrer uma atribuição, a atribuição pode ser nula sendo assim diferente de undefined.
console.log("A variável 'valor' nesse momento foi inicializada com um valor, sendo esse valor:", valor);

/**console.log(valor.toString()) --> ERRO!!
 * Haverá um erro na linha de código 9 pois, null não possui uma referência para um método .toString() próprio, pois null é um valor que não possui nada. 
 */

const produto = {};
console.log("\nUm objeto pode ter um atributo que não é inicializado, sendo assim o atributo é: ", produto.preco);
console.log("Como o objeto não possui um atributo inicializado, o objeto é vazio: ", produto);

produto.preco = 3.5;
console.log("O objeto passou a possuir um atributo inicializado, sendo assim o objeto não é mais vazio: ",produto);

produto.preco = undefined; 
/*Evitar utilizar undefined para zerar uma variável, pois essa notação se refere a variáveis que ainda não foram inicializadas. 
* Deixar para o interpretador utilizar a notação undefined.
*/ 
console.log("\nO atributo preço do objeto produto, possui um valor definido? ", !!produto.preco);
console.log("O conteúdo do Objeto 'produto' é o atributo: ", produto);

/**
 * A notação null é melhor para zerar o valor uma referência, variável ou objeto, sendo assim estes possuem o valor de nada.
 */
produto.preco = null;
console.log("\nO atributo preço do objeto produto, possui um valor válido? ", !!produto.preco);
console.log("O conteúdo do Objeto 'produto' é o atributo: ", produto);