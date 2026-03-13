import { Router } from "express";
import { BD } from "../../db.js"; //usamos isso aqui para conectar com o banco 

const router = Router();

//CRIAÇÃO DO ENDPOINT - ROTA DE DEPARTAMENTOS 
router.get('/ordem_servicos', async (req, res) =>{
    try{
        const query = `SELECT * FROM ordem_servicos ORDER BY id_ordem`
        const ordem_servicos = await BD.query(query);

        res.status(200).json(ordem_servicos.rows);
    }catch(error){
        console.error(`Erro ao listar Ordem de Serviços`, error.message);
        res.status(500).json({erorr: `Erro ao listar Ordem de Serviços`})
    }
})

router.post('/ordem_servicos', async (req, res) => {
    const { numero_ordem, titulo, descricao, prioridade, status, data, id_usuario, id_departamento } = req.body;

    try {

        const comando = `INSERT INTO ORDEM_SERVICOS(numero_ordem, titulo, descricao, prioridade, status, data, id_usuario, id_departamento) VALUES($1, $2, $3, $4, $5, $6, $7, $8)`
        const valores = [numero_ordem, titulo, descricao, prioridade, status, data, id_usuario, id_departamento];

        await BD.query(comando, valores);
        console.log(comando, valores);

        return res.status(201).json("Ordem de Serviços Cadastrado!");


    } catch (error) {
        console.error('Erro ao cadastrar ordem de serviços', error.message);
        return res.status(500).json({ error: 'Erro ao cadastrar ordem de serviços' })
    }
})

router.put('/ordem_servicos/:id_ordem', async(req, res) =>{

    //id recebido via parametro
    const {id_ordem} = req.params;

    //dados do usuario recebido via corpo da página 
    const {numero_ordem, titulo, descricao, prioridade, status, data, id_usuario, id_departamento} = req.body;
    try{
        //verificar se o uusário existe 
        const verificarOrdemServico = await BD.query(`SELECT * FROM ORDEM_SERVICOS
        WHERE id_ordem = $1`, [id_ordem])
        if(verificarOrdemServico.rows.length === 0){
            return res.status(404).json({message: 'Ordem de Serviço não encontrado'})
        }

        //Atualiza todos os campos da tabela!! PUT - SUBSTITUIÇÃO COMPLETA
        const comando = `UPDATE ORDEM_SERVICOS SET numero_ordem = $1, titulo = $2, descricao = $3, prioridade = $4, status = $5, data= $6, id_usuario = $7, id_departamento = $8
        WHERE id_ordem = $9`
        const valores = [numero_ordem, titulo, descricao, prioridade, status, data, id_usuario, id_departamento, id_ordem]; //aqui colocamos na ordem das informações postas acima no comando 
        await BD.query(comando, valores);

        return res.status(200).json({message: 'Ordem de Serviços atualizado com sucesso!'}) //indicando que deu certooo
    } catch(error){
        console.error('Erro ao atualizar ordem de serviços', error.message);
        return res.status(500).json({error: 'Erro ao atualizar ordem de serviços'})
    }
})

export default router