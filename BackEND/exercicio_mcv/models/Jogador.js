class Jogador {
    constructor(id, nome, pontuacao = 0) {
        this.id = id;
        this.nome = nome;
        this.pontuacao = Number(pontuacao);
    }

    resumo() {
        return `${this.nome} - ${this.pontuacao}`;
    }

    adicionarPontos() {
        this.pontuacao += 50;
    }

    nivel() {
        if (this.pontuacao <= 100) return `Iniciante`;
        if (this.pontuacao <= 300) return `Intermediário`;
        return `Avançado`;
    }

}

export default Jogador