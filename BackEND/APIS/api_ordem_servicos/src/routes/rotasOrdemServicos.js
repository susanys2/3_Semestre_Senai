import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

//CRIAÇÃO DO ENDPOINT - ROTA DE DEPARTAMENTOS 
router.get('/ordemservicos', async (req, res) =>{
    try{
        const query = `SELECT * FROM ordem_servicos ORDER BY id_ordem`
        const ordem_servicos = await BD.query(query);

        res.status(200).json(ordem_servicos.rows);
    }catch(error){
        console.error(`Erro ao listar Ordem de Serviços`, error.message);
        res.status(500).json({erorr: `Erro ao listar Ordem de Serviços`})
    }
})

export default router