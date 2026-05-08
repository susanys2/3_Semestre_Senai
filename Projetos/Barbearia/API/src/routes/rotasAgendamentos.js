import express, { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

router.get('/agendamentos', async (req, res) => {
    try {
        const query = `SELECT * FROM agendamentos ORDER BY id_agendamento`;

        //Cria uma variável para receber o retorno do SQL
        const agendamentos = await BD.query(query);

        //Retorno para a pagina, o json com os dados buscados do SQL
        res.status(200).json(agendamentos.rows);
    }
    catch (error) {
        console.error(' ❌ ERRO AO LISTAR AGENDAMENTOS ❌ ', error.message);
        res.status(500).json({ error: '❌ ERRO AO LISTAR AGENDAMENTOS ❌' })
    }
});

router.post('/agendamentos', async (req, res) => {

    const { data_hora, status, id_cliente, id_servico } = req.body;

    try {
        const comando = `INSERT INTO agendamentos(data_hora, status, id_cliente, id_servico) VALUES($1, $2, $3, $4)`;
        const valores = [data_hora, status, id_cliente, id_servico];

        await BD.query(comando, valores);
        console.log(comando, valores);

        return res.status(201).json('Agendamento cadastrado');
    } catch (error) {
        console.error('Erro ao cadastrado de agendamento', error.message);
        return res.status(500).json({ error: 'Erro ao cadastrar agendamento' });
    }
});

router.put('/agendamentos/:id_agendamento', async (req, res) => {

    //Id recebido via parametro 
    const { id_agendamento } = req.params;
    //Dados do Agendamento via corpo da pagina
    const { data_hora, status, id_cliente, id_servico } = req.body

    try {
        //Verificar se o agendamento existe
        const verificarAgendamento = await BD.query(`SELECT * FROM agendamentos WHERE id_agendamento = $1`, [id_agendamento]);
        if (verificarAgendamento.rows.length === 0) {
            return res.status(404).json({ message: 'Agendamento não encontrado' })
        }
        //Atualiza todos os campos da tabela(PUT substituição completa)
        const comando = `UPDATE agendamentos SET data_hora = $1, status = $2, id_cliente = $3, id_servico = $4 WHERE id_agendamento = $5`;
        const valores = [data_hora, status, id_cliente, id_servico, id_agendamento];
        await BD.query(comando, valores);

        return res.status(200).json('Agendamento atualizado com sucesso')
    }
    catch (error) {
        console.error('Erro ao atualizar agendamento');
        return res.status(500).json({ error: 'Erro ao atualizar agendamentos' });
    }
});

router.delete('/agendamentos/:id_agendamento', async (req, res) => {

    //Id recebido via parametro 
    const { id_agendamento } = req.params;

    try {
        const comando = `DELETE FROM agendamentos WHERE id_agendamento = $1`
        await BD.query(comando, [id_agendamento]);
        return res.status(200).json({ message: 'Agendamento removido com sucesso' });

    } catch (error) {
        console.error('Erro ao deletar Agendamento', error.message);
        return res.status(500).json({ message: 'Erro interno no servidor' + error.message });
    }
});

export default router;