import Jogador from "../models/Jogador.js";

//Vetor de objeto de Jogadores
//id
//nome
//pontuação
let listaJogadores = [
    new Jogador(1, "Bianca", 100),
    new Jogador(2, "Daniel", 50),
    new Jogador(3, "João", 30)
]

const jogadorController = {
    listar: (req, res) => { //vai retornar todos os jogadores que tenho cadastrado 
        res.render(`jogadores.ejs`, { jogadores: listaJogadores })
    },

    adicionar: (req, res) => {
        const { nome, pontuacao } = req.body; //tudo o que for passado pelo corpo da página, será extraído

        try { //esse try é pra "tentar" caso ele nao consiga ele entra no "catch" - - tratamento de erros
            //Construção de um novo objeto utilizando a classe Jogador 
            const novoJogador = new Jogador(
                listaJogadores.length + 1,
                nome,
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
        const jogador = listaJogadores.find(j => j.id === Number(id)); //acabamos de receber a informação aqui, qual foi encontrado!
        jogador.adicionarPontos(); //ele vai lá no jogador e atribui +50
        res.redirect(`/jogadores`);
    }

}

export default jogadorController;
