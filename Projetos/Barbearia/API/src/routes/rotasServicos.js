import { Router } from "express";
import { BD } from "../../db.js"; //usamos isso aqui para conectar com o banco 

const router = Router();

//CRIAÇÃO DO ENDPOINT - ROTA DE SERVIÇOS 
router.get('/servicos', async (req, res) => {
    try {
        const query = `SELECT * FROM servicos ORDER BY id_servico`;

        //Cria uma variável para receber o retorno do SQL
        const servicos = await BD.query(query);

        //Retorno para a pagina, o json com os dados buscados do SQL
        res.status(200).json(servicos.rows);
    }
    catch (error) {
        console.error(' ❌ ERRO AO LISTAR SERVIÇOS ❌ ', error.message);
        res.status(500).json({ error: '❌ ERRO AO LISTAR SERVIÇOS ❌' })
    }
});

router.post('/servicos', async (req, res) => {
    const { nome_servico, preco, descricao } = req.body;

    try {

        const comando = `INSERT INTO servicos(nome_servico, preco, descricao) VALUES($1, $2, $3)`
        const valores = [nome_servico, preco, descricao];

        await BD.query(comando, valores);
        console.log(comando, valores);

        return res.status(201).json("Serviço Cadastrado!");


    } catch (error) {
        console.error('Erro ao cadastrar Serviço', error.message);
        return res.status(500).json({ error: 'Erro ao cadastrar serviço' })
    }
})

router.put('/servicos/:id_servico', async(req, res) =>{

    //id recebido via parametro
    const {id_servico} = req.params;

    const {nome_servico, preco, descricao} = req.body;
    try{
        //verificar se o serviço existe
        const verificarServico = await BD.query(`SELECT * FROM servicos
        WHERE id_servico = $1`, [id_servico])
        if(verificarServico.rows.length === 0){
            return res.status(404).json({message: 'Serviço não encontrado'})
        }

        //Atualiza todos os campos da tabela!! PUT - SUBSTITUIÇÃO COMPLETA
        const comando = `UPDATE SERVICOS SET nome_servico = $1, preco = $2, descricao = $3
        WHERE id_servico = $4`
        const valores = [nome_servico, preco, descricao, id_servico];
        await BD.query(comando, valores);

        return res.status(200).json({message: 'Serviço atualizado com sucesso!'})
    } catch(error){
        console.error('Erro ao atualizar Serviços', error.message);
        return res.status(500).json({error: 'Erro ao atualizar Serviços'})
    }
})

router.delete('/servicos/:id_servico', async (req, res) => {

    //Id recebido via parametro 
    const { id_servico } = req.params;

    try {
        const comando = `DELETE FROM servicos WHERE id_servico = $1`
        await BD.query(comando, [id_servico]);
        return res.status(200).json({ message: 'Serviço removido com sucesso' });

    } catch (error) {
        console.error('Erro ao deletar Serviço', error.message);
        return res.status(500).json({ message: 'Erro interno no servidor' + error.message });
    }
});

export default router