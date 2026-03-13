import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

//CRIAÇÃO DO ENDPOINT - ROTA DE DEPARTAMENTOS 
router.get('/departamentos', async (req, res) =>{
    try{
        const query = `SELECT * FROM departamentos ORDER BY id_departamento`
        const departamentos = await BD.query(query);

        res.status(200).json(departamentos.rows);
    }catch(error){
        console.error(`Erro ao listar departamentos`, error.message);
        res.status(500).json({erorr: `Erro ao listar departamentos`})
    }
})

router.post('/departamentos', async (req, res) => {
    const { nome, descricao } = req.body;

    try {

        const comando = `INSERT INTO DEPARTAMENTOS(nome, descricao) VALUES($1, $2)`
        const valores = [nome, descricao];

        await BD.query(comando, valores);
        console.log(comando, valores);

        return res.status(201).json("Departamento Cadastrado!");


    } catch (error) {
        console.error('Erro ao cadastrar departamentos', error.message);
        return res.status(500).json({ error: 'Erro ao cadastrar departamentos' })
    }
})

router.put('/departamentos/:id_departamento', async(req, res) =>{

    //id recebido via parametro
    const {id_departamento} = req.params;

    //dados do usuario recebido via corpo da página 
    const {nome, descricao} = req.body;
    try{
        //verificar se o uusário existe 
        const verificarDepartamento = await BD.query(`SELECT * FROM DEPARTAMENTOS
        WHERE id_departamento = $1`, [id_departamento])
        if(verificarDepartamento.rows.length === 0){
            return res.status(404).json({message: 'Departamento não encontrado'})
        }

        //Atualiza todos os campos da tabela!! PUT - SUBSTITUIÇÃO COMPLETA
        const comando = `UPDATE DEPARTAMENTOS SET nome = $1, descricao = $2
        WHERE id_departamento = $3`
        const valores = [nome, descricao, id_departamento]; //aqui colocamos na ordem das informações postas acima no comando 
        await BD.query(comando, valores);

        return res.status(200).json({message: 'Departamento atualizado com sucesso!'}) //indicando que deu certooo
    } catch(error){
        console.error('Erro ao atualizar departamentos', error.message);
        return res.status(500).json({error: 'Erro ao atualizar departamentos'})
    }
})

export default router