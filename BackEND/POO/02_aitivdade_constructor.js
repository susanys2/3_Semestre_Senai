//CRIANDO A CLASSE BRUXO COM O MÉTODO CONSTRUTOR

class Bruxo {
    constructor(nome, idade, feitico, casa, nivel_magia){
        this.nome = nome;
        this.idade = idade;
        this.feitico = feitico;
        this.casa = casa;
        this.nivel_magia = nivel_magia;
    }
}

const bruxo1 = new Bruxo("Harry Potter", 15 , "Todos", "Grifinoria", "Avançado");
console.log(bruxo1);

