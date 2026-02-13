import Jogador from "../models/Jogador.js";

//Vetor de objeto de livros
//id
//nome
//nivel
let listaJogadores = [
    new Jogador(1, "Bianca", "Avançado", 100),
    new Jogador(2, "Daniel", "Intermediário", 50),
    new Jogador(3, "João", "Baixo", 30)

]

const jogadorController = {
    listar: (req, res) => {
        res.render(`jogadores.ejs`, { jogadores: listaJogadores })
    },
    adicionar: (req, res) => {
        const { nome, nivel, pontuacao } = req.body; //tudo o que for passado pelo corpo da página, será extraído

        try {
            //COnstrução de um novo objeto utilizando a classe Jogador 
            const novoJogador = new Jogador(
                listaJogadores.length + 1,
                nome,
                nivel,
                Number(pontuacao)
            );
            listaJogadores.push(novoJogador);
            res.redirect(`/jogadores`);
        } catch (e) {
            res.status(400).render(`jogadores.ejs`, { lista: listaJogadores, erro: e.message })
        }

    },
    adicionarPontos: (req, res) => {
        const { id } = req.body;
        const jogador = listaJogadores.find(J => J .id === Number(id))
        jogador.adicionarPontos();
        res.redirect(`/jogadores`);
    }

}

export default jogadorController;
