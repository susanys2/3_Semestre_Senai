class Jogador {
    constructor(id, nome, nivel, pontuacao){
        if(!nome){
            throw new Error(`O nome do jogador é obrigatório!`);
        }
        this.id = id;
        this.nome = nome;
        this.nivel = nivel;
        this.pontuacao = pontuacao;
        this.adicionado = false;
    }

    adicionarPontos(){
        return this.pontuacao += 10;
    }

    verificarPontuacao(){
        if(this.pontuacao >= 100) return `Avançado`;
        if(this.pontuacao >= 50) return `Intermediário`;
        if(this.pontuacao <= 40) return `Baixo`;
    }


    resumo(){
        return `${this.nome}`;
    }

    marcarComoAdicionado(){
        this.adicionado = true;
    }
}

export default Jogador