class Heroi {
    nome;
    velocidade;
    embate_fisico;
    mira;
    nivel_poder;
    
    constructor(nome, velocidade, embate_fisico, mira, nivel_poder){
        this.nome = nome;
        this.velocidade = velocidade;
        this.embate_fisico = embate_fisico;
        this.mira = mira;
        this.nivel_poder = nivel_poder;
    }
    apresentar(){
        return `Heroi genérico: ${this.nome}, ${this.velocidade}, ${this.embate_fisico}, ${this.mira}, ${this.nivel_poder}`
    }

    camuflagem(){
        return `Nivel de poder: ${this.nivel_poder} reduzido! Devido a uso de camuflagem! 🛑`
    }

} 

class Vingadores extends Heroi{
    lancar_teia;
    constructor(nome, velocidade, embate_fisico, mira, lancar_teia) {
        super(nome, velocidade, embate_fisico, mira);
        this.lancar_teia = lancar_teia;
    }

    apresentar(){
        return `Olá, ${this.nome}!`
    }

    lancarTeia(){
        return `Lançando teia: ${this.lancar_teia}`;
    }

}

class DC extends Heroi{
    #lancar_raio;
    constructor(nome, velocidade, embate_fisico, mira, lancar_raio) {
        super(nome, velocidade, embate_fisico, mira);
        this.#lancar_raio = lancar_raio;
    }
   
    apresentar(){
        return `Olá, ${this.nome}!`
    }

    lancarRaio(){
        return `${this.#lancar_raio}: O heroi está lançando raios!!`;
    }
}

//APRESENTAÇÃO HEROI INICIAL
const heroi1 = new Heroi('Heroi_padrão', '50', '50', 'Boa', '50');
console.log(heroi1.apresentar());
console.log(heroi1.camuflagem());

//APRESENTAÇÃO VINGADORES - HOMEM ARANHA
const H = new Vingadores('Homem-Aranha', '2000', '2000', 'Precisa', '2000');
console.log(H.apresentar());
console.log(H.lancarTeia());

//APRESENTAÇÃO DC - LANTERNA-VERDE 
const L = new DC('Lanterna-Verde', '1000', '1000', '50', 'RaioLazer');
console.log(L.apresentar());
console.log(L.lancarRaio());

