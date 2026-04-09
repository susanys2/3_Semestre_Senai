import express, { Router } from "express";
import { BD } from "../../db.js";
import bcrypt from "bcrypt";

const router = Router();

//Criando o endpoint para listar todos as categorias
router.get('/transacoes', async (req, res) => {
    try {
        const comando = `
                SELECT 
                    t.id_transacao,
                    t.valor,
                    t.descricao,
                    TO_CHAR(t.data_registro, 'DD/MM/YYYY') AS data_registro,
                    TO_CHAR(t.dat_pagamento, 'DD/MM/YYYY') AS dat_pagamento,
                    TO_CHAR(t.data_vencimento, 'DD/MM/YYYY') AS data_vencimento,
                    t.tipo,
                    c.nome AS nome_categoria,
                    s.nome AS nome_subcategoria
                FROM transacoes t
                LEFT JOIN categorias c ON t.id_categoria = c.id_categoria
                LEFT JOIN subcategorias s ON t.id_categoria = s.id_subcategoria
`;

        //Cria uma variável para receber o retorno do SQL
        const transacoes = await BD.query(comando);

        //Retorno para a pagina, o json com os dados buscados do SQL
        res.status(200).json(transacoes.rows);

        console.log("🔥 BATEU NA ROTA /transacoes");
    }
    catch (error) {
        console.error(' ❌ ERRO AO LISTAR TRANSACOES ❌ ', error.message);
        res.status(500).json({ error: '❌ ERRO AO LISTAR TRANSACOES ❌' + error.message })
    }
});



export default router;