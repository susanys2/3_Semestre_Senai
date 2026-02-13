//POLIMORFISMO

class Pessoa {
    nome;
    constructor(nome) {
        this.nome = nome
    }

    apresentar() {
        return `Olá, ${this.nome}`;
    }
}

class PessoaFisica extends Pessoa {
    cpf;
    constructor(nome, cpf) {
        super(nome);
        this.cpf = cpf
    }
    apresentar(){
        return `Olá, ${this.nome}! seu cpf é: ${this.cpf}`
    }
}

class PessoaJuridica extends Pessoa {
    cnpj;
    constructor(nome, cnpj) {
        super(nome);
        this.cnpj = cnpj
    }
    apresentar(){
        return `Olá, ${this.nome}! seu cnpj é ${this.cnpj}`
    }
}


//TEMOS O PODER DESSE METODO DE TRIPLICAR E APRESENTAR COISAS DIFERENTES!!!!

const ana = new PessoaFisica('Ana', '123.456.789-00');
console.log(ana.apresentar()); //parenteses para quando temos uma função 
console.log(ana.cpf);

const sesi = new PessoaJuridica('Escola SESI-025', '324.567.432/0001-90');
console.log(sesi.apresentar());

const susy = new Pessoa('Susy');
console.log(susy.apresentar())

const joao = new Pessoa('João Pedro');
console.log(joao.apresentar());