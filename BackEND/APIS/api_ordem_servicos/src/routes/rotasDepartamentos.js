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

export default router