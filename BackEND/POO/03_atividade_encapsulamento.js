class Bruxo {
    //Atributo Privado
    #nivel_energia = 100;

    //Atributo Público
    nome;
    idade;
    feitico;
    casa;
    nivel_magia;

    constructor(nome, idade, feitico, casa, nivel_magia,){
        this.nome = nome;
        this.idade = idade;
        this.feitico = feitico;
        this.casa = casa;
        this.nivel_magia = nivel_magia;
    }
    apresentar(){
        return `${this.nome}, ${this.idade}, ${this.feitico}, ${this.casa}, ${this.nivel_magia}`;
    }

    //Aqui é onde vai mostrar a energia 
    verEnergia(){
        return this.#nivel_energia;
    }
    //Aqui vai recarregar
    recarregarEnergia(){
        return this.#nivel_energia += 10; 
    }
    //Aqui vai lançar um feitiço 
    lancarFeitico(){
        return this.#nivel_energia -= 10;
    }
}

//esses sinais juntos, é pra pegar do valor que está seguindo, não o inicial que é 100

const bruxo1 = new Bruxo("Harry", 18, "Abracadabra", "Grifinória", 1000)
console.log(`Apresentação do BRUXO:`,bruxo1.apresentar());
console.log(`O valor inicial de energia é:`,bruxo1.verEnergia())
console.log(`O valor após recarregar é:`,bruxo1.recarregarEnergia());
console.log(`O valor após lançar um feitiço é:`,bruxo1.lancarFeitico());