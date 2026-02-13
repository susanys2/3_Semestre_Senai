//Criando o metodo CONSTRUTOR - mais rápido  
//esse THIS vem de ESSE... ESSE NOME... ESSA IDADE
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

//CHAMAMOS ELA COMO SE FOSSE UMA FUNÇÃO 
const pessoa1 = new Pessoa("Cláudia", 25);
console.log(pessoa1);
const pessoa2 = new Pessoa("Matheus", 13);
console.log(pessoa2);
const pessoa3 = new Pessoa("Susany", 16);
console.log(pessoa3)

