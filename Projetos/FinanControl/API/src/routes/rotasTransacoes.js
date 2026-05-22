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

//Cadastrar nova transação
router.post('/transacoes', async (req, res) => {

    const { valor, descricao, data_registro, dat_pagamento, data_vencimento, tipo } = req.body;

    try {
        const comando = `INSERT INTO transacoes (valor, descricao, data_registro, dat_pagamento, data_vencimento, tipo)
        VALUES($1, $2, $3, $4, $5, $6)`;
        const valores = [valor, descricao, data_registro, dat_pagamento, data_vencimento, tipo];

        await BD.query(comando, valores);
        console.log(comando, valores);

        return res.status(201).json('Transação cadastrada');
    } catch (error) {
        console.error('Erro ao cadastrar transação', error.message);
        return res.status(500).json({ error: `Erro ao cadastrar transação ${error.message}` });
    }
});

//Atualizar todos os dados de transações
router.put('/transacoes/:id_transacao', async (req, res) => {

    //Id recebido via parametro 
    const { id_transacao } = req.params;
    //Dados do Usuario via corpo da pagina
    const { valor, descricao, data_registro, dat_pagamento, data_vencimento, tipo } = req.body

    try {

        //Verificar se o usuario existe
        const verificarTransacao = await BD.query(`SELECT * FROM transacoes WHERE id_transacao = $1`, [id_transacao]);
        if (verificarTransacao.rows.length === 0) {
            return res.status(404).json({ message: 'Transação não encontrada' })
        }

        //Atualiza todos os campos da tabela(PUT substituição completa)
        const comando = `UPDATE transacoes SET valor = $1, descricao = $2, data_registro = $3, dat_pagamento = $4, data_vencimento = $5, tipo = $6 WHERE id_transacao = $7`;
        const valores = [ valor, descricao, data_registro, dat_pagamento, data_vencimento, tipo, id_transacao];
        await BD.query(comando, valores);

        return res.status(200).json('Transação atualizada com sucesso')
    }
    catch (error) {
        console.error('Erro ao atualizar transação');
        return res.status(500).json({ error: `Erro ao atualizar transação ${error.message}` });
    }
});

//Deletar transações
router.delete('/transacoes/:id_transacao', async (req, res) => {

    //Id recebido via parametro 
    const { id_transacao } = req.params;

    try {
        const comando = `DELETE FROM transacoes WHERE id_transacao = $1`
        await BD.query(comando, [id_transacao]);
        return res.status(200).json({ message: 'Transação removida com sucesso' });

    } catch (error) {
        console.error('Erro ao deletar Categoria', error.message);
        return res.status(500).json({ message: 'Erro interno no servidor' + error.message });
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



export default router;