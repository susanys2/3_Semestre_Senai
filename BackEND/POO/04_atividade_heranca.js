class Bruxo{
    nome;
    nivel_magia;
    feitico;
    //privado
    #nivel_energia;

    constructor(nome, nivel_magia){
        this.nome = nome;
        this.nivel_magia = nivel_magia;
    }

    apresentar(){
        return `${this.nome, this.nivel_magia}`
    }

    lancarFeitico(){
        return this.#nivel_energia -= 10;
    }
}

//Subclasse grifinoria 
class BruxoGrifinoria extends Bruxo{
    casa;
    constructor(nome, nivel_magia = 10){
        super(nome, nivel_magia)
        this.casa = 'Grifinória';
    }

    feiticoAss(){
        return this.lancarFeitico('Expelliarmus');
    }
}

//Subclasse Sonserina
class BrxoSonserina extends Bruxo{
    constructor(nome, nivel_magia = 10){
        super(nome, nivel_magia);
        this.casa = 'Sonserina';
    }
}

const H = new BruxoGrifinoria('Harry Potter');
console.log(H.apresentar());
