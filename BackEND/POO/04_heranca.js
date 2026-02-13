//CLASSE HERANÇAS
//podemos criar subclasses a partir dessa 
class Pessoa {
    nome;
    constructor(nome) {
        this.nome = nome
    }

    apresentar() {
        return `${this.nome}`;
    }
}

//Uma extensão da classe pessoa
//quando utilizamos o SUPER ele vem da classe pai 
//     pegue e atriu=bua nesse objeto, porem o que eu coloquei lá em cima
class PessoaFisica extends Pessoa {
    cpf;
    constructor(nome, cpf) {
        super(nome);
        this.cpf = cpf
    }
}

class PessoaJuridica extends Pessoa {
    cnpj;
    constructor(nome, cnpj) {
        super(nome);
        this.cnpj = cnpj
    }
}

const ana = new PessoaFisica('Ana', '123.456.789-00');
console.log(ana.apresentar()); //parenteses para quando temos uma função 
console.log(ana.cpf);

const sesi = new PessoaJuridica('Escola SESI-025', '324.567.432/0001-90');
console.log(sesi.apresentar());
console.log(sesi.cnpj);

const susy = new Pessoa('Susy');
console.log(susy.apresentar())