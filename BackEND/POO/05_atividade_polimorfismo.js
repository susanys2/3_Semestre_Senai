class Bruxo {
    nome;
    idade;
    feitico = 'Expelliarmus';
    casa;
    nivel_magia;
    #nivel_energia = 100;

    constructor(nome, idade, feitico, casa, nivel_magia) {
        this.nome = nome;
        this.idade = idade;
        this.feitico = feitico;
        this.casa = casa;
        this.nivel_magia = nivel_magia;

    }
    apresentar() {
         return `${this.nome}, ${this.idade}, ${this.feitico}, ${this.casa}, ${this.nivel_magia}`;
    }

    //Mostrando a energia
    verEnergia() {
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

    //Feitico Favorito do Bruxo 
    feiticoAss() {
        return `Seu feitico favorito é: ${this.feitico}`;
    }

}

//POLIFORMISMO
class BruxoGrifinoria extends Bruxo {
    casaGrifi;
    constructor(nome, casaGrifi, idade) {
        super(nome, idade);
        this.casaGrifi = casaGrifi
    }
    apresentar() {
        return `Olá ${this.nome}! voce é da casa de ${this.casaGrifi} e tem ${this.idade} anos!`

    }
}

//POLIFORMISMO
class BruxoSonserina extends Bruxo {
    casaSon;
    constructor(nome, casaSon, idade ) {
        super(nome, idade);
        this.casaSon = casaSon
    }
    apresentar(){
        return `Olá ${this.nome}! voce é da casa de ${this.casaSon} e tem ${this.idade} anos!`
    }
}

//BRUXO NORMAL
const bruxo1 = new Bruxo('Harry Potter', '15', 'Expelliarmus', 'Grifinória', '1000');
console.log(bruxo1.apresentar());
console.log(bruxo1.verEnergia());
console.log(bruxo1.feiticoAss());

//GRIFINORIA
const bruxo2 = new BruxoGrifinoria('Hermione', 'Grifinória', '15');
console.log(bruxo2.apresentar());

//SONSERINA
const bruxo3 = new BruxoSonserina('Lux', 'Sonserina', '18');
console.log(bruxo3.apresentar());


