import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

//Método GET para sortear a questão 
router.get(`/jogo`, async (req, res) => {

    try{
        const comando = `SELECT * FROM perguntas`; //selecione tudo em perguntas
        const resultado = await BD.query(comando); //armazenou tudo aqui 
        const todasPerguntas = resultado.rows;

        if(todasPerguntas.length === 0){
            return res.status(404).json({ message: `Nenhuma pergunta cadastrada no banco.` })
        }

        const indiceAleatorio = Math.floor(Math.random() * todasPerguntas.length); //fazendo um sorteio dentro das perguntas
        const perguntaSorteada = todasPerguntas[indiceAleatorio];

        //Vetor para criação
        const opcoes = [
            perguntaSorteada.opcao_1,
            perguntaSorteada.opcao_2,
            perguntaSorteada.opcao_3,
            perguntaSorteada.opcao_4,
        ];

        return res.status(200).json({
            pergunta: perguntaSorteada.pergunta,
            imagem: perguntaSorteada.imagem_url,
            respostaCorreta: perguntaSorteada.resposta_correta,
            opcoes: opcoes
        });



    }catch(error){
        return res.status(500).json({ error: `Erro interno ao gerar rodada` + error.message});
    }

})

export default router;