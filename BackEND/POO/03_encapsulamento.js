class Pessoa {
    //Atributo Privado
    #documento;

    //Atributo Público
    nome;
    idade;

    constructor(nome, idade, documento){ //para informar que um atributo vai ser privado colocamos o jogo da velha na frente 
        this.nome = nome;
        this.idade = idade;
        this.#documento = documento; //privado 
    }

    apresentar(){
        return `${this.nome}, ${this.idade}`
    }
    //criamos um metodo que vai MOSTRAR o documento 
    mostrarDocumento(){
        return this.#documento;
    }
}

const pessoa1 = new Pessoa("Silvia", 28, '12345678900');
//caso queiramos acessar algo, a maneira tradicional nao vaidar certo no documento, por exemplo, pois é privado 
//console.log(pessoa1.documento); - retorna como undefined
console.log(pessoa1.apresentar()); //retorna apenas o nome e a idade - pois foi o que passamosem APRESENTAR
console.log(pessoa1.mostrarDocumento()); //agora sim conseguimos retornar aquilo que está privado
