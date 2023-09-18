/**Divisão por ZERO
 * 
 * Em javascript a divisão por zero não resulta em uma excessão, há um tipo para definir essa ocorrência.
 */

console.log("O resultado de uma divisão por zero no javascript é o tipo: " + 7 / 0);
 
/**Representação de tipagem fraca
 * 
 * Como javascript possui muitas liberdades, é possível dividir o conteúdo de uma string por um valor numérico desde que o valor da string seja reconhecivel para tal,
 * sendo assim é necessário redobrar atenção para evitar problemas no código em função de não se atentar a fraca tipagem da linguagem.
 */
console.log("\nResultado de uma operação aritmética utilizando uma string com valor reconhecível para calcular: " +  "10" / 2);

/*O Resultado dessa operação será diferente pois o operador + possui outras interações com outros tipos, no caso o tipo String. 
* O tipo string tem uma prioridade maior que a função aritmética de soma, sendo assim o resultado da operação abaixo não terá o mesmo efeito que a operação da linha 13.
*/
console.log("Esta operação terá outro resultado pois não está sendo realizado uma operação aritmética e sim uma concatenação: de uma string e um literal: " +  "10" + 2);


console.log("\nResultado de uma operação aritmética utilizando uma string com valor irreconhecível para calcular: " + "Show!" * 2 + " \(\"Not a Number\")");
        
console.log("\nO javascript utiliza uma epecificação que define a regra para \
ponto flutuante (IEEE) que não representa os valores exatamente precisos, por questoês de performance. \n\
Exemplo: " 
+ 0.1 + 0.7);

console.log("\nNão é possível converter um valor literal utilizando o método estático .toString(): ERROR -> console.log(10.toString()");

console.log((10.345).toFixed(2));