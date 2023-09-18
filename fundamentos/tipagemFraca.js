/**
 *Javascript é um linguagem de tipagem dinâmica, ou seja o tipo das variáveis pode ser alterado 
 *sem haver a necessidade de definir uma variável para o tipo específico,
 * sendo assim é uma liguagem de tipagem fraca.
 */


 let qualquer = 'Legal'; //Tipo string

 console.log(typeof qualquer + ":" + qualquer);
 

 qualquer = 3.1415;
 console.log("\n" + typeof qualquer + ":" + qualquer);

 /**
  * Foi possível atribuir para a variável ->qualquer<- um valor de tipo diferente do tipo que foi atribuído 
  * na definição da variável, sendo assim a linguagem javascript não possui rigidez em relação a tipagem.
  */

 //Evitar nomes genéricos e siglas.
let valor = '';
let numero = 1;
let pqp = false; // Produto Químico Perigoso... kkk
