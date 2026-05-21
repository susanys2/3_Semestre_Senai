import { Router } from 'express';
import { BD } from '../../db.js';
import jwt from 'jsonwebtoken';
import { autenticarToken } from '../middlewares/Autenticacao.js'

const router = Router();
const SECRET_KEY = "minha_chave_secreta";

//Consultas sequenciais
router.get(`/dashboard`, async (req, res) => {
    try {
        //Resumo do mes
        const selecaoResumoMes = `
        SELECT 
        SUM(
            CASE WHEN a.status = 'Confirmado' THEN 1 ELSE 0 END
            ) as confirmados,
        SUM(
            CASE WHEN a.status = 'Cancelado' THEN 1 ELSE 0 END
            ) as cancelados, 
        SUM(
            CASE WHEN a.status = 'Confirmado' THEN s.preco ELSE 0 END
            ) as faturamento_total

        FROM agendamentos a
        INNER JOIN servicos s
        ON a.id_servico = s.id_servico
        WHERE DATE_TRUNC('month', a.data_hora) = DATE_TRUNC('month', CURRENT_DATE)

    `;
        
        //Serviços mais procurados - Aparecendo apenas 2
        const selecaoMaisProcurados = `SELECT nome_servico, COUNT (*) AS quantidade 
        FROM servicos s
        INNER JOIN agendamentos a ON a.id_servico = s.id_servico
        GROUP BY s.nome_servico
        ORDER BY quantidade DESC
        LIMIT 2 
    `;

        //Próximos agendamentos
        const selecaoProximosAgendamentos = `
        
    `;


        const resResumoMes = await BD.query(selecaoResumoMes);
        const resMaisProcurados = await BD.query(selecaoMaisProcurados);
        const resProximosAgendamentos = await BD.query(selecaoProximosAgendamentos);

        //Objeto com todos os Dados
        const dadosDashboard = {
            resumoMes: resResumoMes.rows[0] || { corte_americano: 0, corte_low_fade: 0, corte_mid_fade: 0, corte_moicano: 0 },
            maisProcurados: resMaisProcurados.rows,
            proximosAgendamentos: resProximosAgendamentos.rows
        }

        return res.status(200).json(dadosDashboard)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})





export default router;