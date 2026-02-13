//CRIANDO NOSSA PRIMEIRA CLASS

//Adicionando seus atributos - caracteristicas
class Pessoa {
    nome;
    idade;
}

//Criando um novo objeto (instancia)  - sempre fora da outra
const pessoa1 = new Pessoa(); //aqui nos instanciamos uma nova pessoa, alguem recebeu os mesmos atributos que estão em Pessoa
console.log(pessoa1);

//Aplicando valores aos atributos 
//NOME
pessoa1.nome = "Carlos";
console.log(pessoa1);
console.log(pessoa1.nome); //aqui mostraremos apenas o nome  - valor da chave nome do objeto 

//IDADE
pessoa1.idade = 30;
console.log(pessoa1);
console.log(pessoa1.idade);

//Criando a segunda pessoa
const pessoa2 = new Pessoa();
pessoa2.nome = "Susany";
pessoa2.idade = 16;
console.log(pessoa2)

