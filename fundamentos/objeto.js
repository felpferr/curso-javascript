const prod1 = {};

prod1.nome = "Celular Ultra Mega";
prod1.prod1 = 4998.90;
prod1["Desconto Bacana"] = 0.4; //Utilizar colchetes logo após o nome do objeto permite utilizar criar o o nome do par nome:valor com espaços, porém isso deve ser evitado.

console.log("Atributos do objeto prod1: ", prod1);

const prod2 = {
    nome: "Camisa Polo",
    preco: 79.90
};

console.log("Atributos do objeto prod2: ", prod2);

//Abaixo está o modelo de como é a criação padrão de um JSON no javascript, um JSON é diferente de um objeto pois um JSON é formado em texto puro já um objeto é uma coleção de chave:Valor.
' {"nome" : "Notebook Top, "Preço" : 2000.00, "DescontoAplicado" : "R$2000.00"} '

