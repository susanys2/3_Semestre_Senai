import { Router } from 'express';
import { BD } from '../../db.js';
import jwt from 'jsonwebtoken';
import { autenticarToken } from '../middlewares/Autenticacao.js'

const router = Router();
const SECRET_KEY = "minha_chave_secreta";

//Transações por Categoria
router.get(`/dashboard`, async (req, res) => {
    try { //aqui nos estamos praticamente:
        //“Mostre o nome de cada categoria e o total gasto 
        // nela, considerando apenas transações de saída, 
        // agrupando por categoria 
        // e ordenando do maior gasto para o menor.”

        //- - - - Gráfico de Pizzas de gastos por categoria - - - - 
        const selecaoCategorias = `
        SELECT c.nome, SUM(t.valor) AS total 
        FROM transacoes t
        INNER JOIN categorias c ON t.id_categoria = c.id_categoria
        WHERE t.tipo = 'S'
        GROUP BY c.nome 
        ORDER BY total DESC`

        //5 maiores gastos
        const selecaoMaioresGastos = `
        SELECT descricao, valor, TO_CHAR(data_registro, 'DD/MM/YYYY') 
        FROM transacoes 
        WHERE tipo = 'S'
        ORDER BY valor DESC
        LIMIT 5 
        `

        //Card de resumo do mes 
        const selecaoResumoMes = `
        SELECT
            SUM(CASE WHEN tipo = 'E' THEN valor ELSE 0 END) as entradas,
            SUM(CASE WHEN tipo = 'S' THEN valor ELSE 0 END) as saidas,
            SUM(CASE WHEN tipo = 'E' THEN valor ELSE -valor END) as saldo
        FROM transacoes
        WHERE DATE_TRUNC('month', data_registro) = DATE_TRUNC('month', CURRENT_DATE)
        `

        //Evolução mensal
        const evolucaoMensal = `
        SELECT
            TO_CHAR(data_registro, 'MM/YYYY') as mes,
            SUM(CASE WHEN tipo = 'E' THEN valor ELSE 0 END) as entradas,
            SUM(CASE WHEN tipo = 'S' THEN valor ELSE 0 END) as saidas
        FROM transacoes
        GROUP BY TO_CHAR(data_registro, 'MM/YYYY'), DATE_TRUNC('month', data_registro)
        ORDER BY DATE_TRUNC('month', data_registro) ASC 
        `

        //Consulta com as ultimas 5 transacoes
        //estamos puxando a partir de sua DATA
        const ultimasTransacoes = `
        SELECT descricao, valor, TO_CHAR(data_registro, 'DD/MM/YYYY') as data 
        FROM transacoes 
        ORDER BY data DESC
        LIMIT 5 
        `

        const resCategorias = await BD.query(selecaoCategorias)
        const resMaioresGastos = await BD.query(selecaoMaioresGastos)
        const resResumoMes = await BD.query(selecaoResumoMes)
        const resEvolucaoMes = await BD.query(evolucaoMensal)
        const resUltimasTransacoes = await BD.query(ultimasTransacoes)

        //Objeto com todos os Dados
        const dadosDashboard = {
            resumoCategorias: resCategorias.rows,
            resumoMaioresGastos: resMaioresGastos.rows,
            resumoMes: resResumoMes.rows[0] || {entrada: 0, saidas: 0, saldo: 0}, //pegando a primeira posição
            resumoEvolucaoMensal: resEvolucaoMes.rows,
            ultimasTransacoes: resUltimasTransacoes.rows
        }

        return res.status(200).json(dadosDashboard)
    } catch (error) {
        return res.status(500).json({ error: error.message })

    }

});

export default router;

