import express, { Router } from "express";
import { BD } from "../../db.js";
import bcrypt from "bcrypt";

const router = Router();

//Listar transações
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

//Listar transações por tipo
router.get(`/transacoes/tipo/:tipo`, async (req, res) => {
    const { tipo } = req.params; //pegar o tipo E ou S
    try {
        const comando = `
                SELECT *
                FROM transacoes
                WHERE tipo = $1
`;

        const resultado = await BD.query(comando, [tipo.toUpperCase()]);
                console.log(resultado.rows);

        return res.status(200).json(resultado.rows) //se tiver um valor ele retorna um, caso não, retorna 0
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
});

//Listar transações por período
router.get('/transacoes/periodo', async (req, res) => {
    const { inicio, fim } = req.query
    try {
        if (!inicio || !fim) {
            return res.status(400).json({ message: `Informe as datas de inicio e de fim` })
        }
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
                LEFT JOIN subcategorias s ON t.id_subcategoria = s.id_subcategoria
                WHERE t.data_registro BETWEEN TO_DATE($1, 'DD/MM/YYYY') AND TO_DATE($2, 'DD/MM/YYYY')
                ORDER BY t.data_registro DESC
`;

        //Cria uma variável para receber o retorno do SQL
        const transacoes = await BD.query(comando, [inicio, fim]);

        //Retorno para a pagina, o json com os dados buscados do SQL
        res.status(200).json(transacoes.rows);

        console.log("🔥 BATEU NA ROTA /transacoes");
    }
    catch (error) {
        console.error(' ❌ ERRO AO LISTAR TRANSACOES ❌ ', error.message);
        res.status(500).json({ error: '❌ ERRO AO LISTAR TRANSACOES ❌' + error.message })
    }
});

//Rota soma de transações
router.get('/transacoes/total', async (req, res) => {
    const { tipo } = req.query; //pegar o tipo E ou S
    try {
        if (!tipo) {
            return res.status(400).json({ message: `Informe o tipo de transação: E ou S` })
        }
        const comando = `SELECT SUM(valor) AS total 
        FROM transacoes 
        WHERE tipo = $1`;

        const resultado = await BD.query(comando, [tipo.toUpperCase()]);
        return res.status(200).json({
            tipo: tipo.toUpperCase(),
            total: resultado.rows[0].total || 0 //se tiver um valor ele retorna um, caso não, retorna 0
        })
    } catch (error) {
        return res.status(500).json({ error: `Erro ao calcular o total de transações` })
    }
});

//Endpoints do Dashboard


//Transações por Categoria
router.get(`/dashboard/categorias`, async (req, res) => {
    try { //aqui nos estamos praticamente:
        //“Mostre o nome de cada categoria e o total gasto 
        // nela, considerando apenas transações de saída, 
        // agrupando por categoria 
        // e ordenando do maior gasto para o menor.”
        const comando = `
        SELECT c.nome, SUM(t.valor) AS total 
        FROM transacoes t
        INNER JOIN categorias c ON t.id_categoria = c.id_categoria
        WHERE t.tipo = 'S'
        GROUP BY c.nome 
        ORDER BY total DESC`

        const resultado = await BD.query(comando)
        return res.status(200).json(resultado.rows)
    } catch (error) {
        return res.status(500).json({ error: error.message })

    }

});

//5 maiores despesas
router.get(`/dashboard/maiores-gastos`, async (req, res) => {
    try {  
        const comando = `
        SELECT descricao, valor, TO_CHAR(data_registro, 'DD/MM/YYYY') 
        FROM transacoes 
        WHERE tipo = 'S'
        ORDER BY valor DESC
        LIMIT 5
        `
        const resultado = await BD.query(comando)
        return res.status(200).json(resultado.rows)
    } catch (error) {
        return res.status(500).json({ error: error.message })

    }

});





export default router;