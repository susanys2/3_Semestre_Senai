import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

//Criando o endPoint para listar todos os usuários 
//método get tem ação de buscar - sempre vai tá listando alguma coisa 
//Rota de usuarios
router.get('/usuarios', async (req, res) => {
    try{
        //cria uma variável para enviar o comando SQL
        const query = `SELECT * FROM usuarios ORDER BY id_usuario`

        //cria uma variável para receber o retorno do SQL
        const usuarios = await BD.query(query);

        //retorno para a página o JASON com os dados
        //buscados do SQL - - - - o STATUS 200 (de HTTP) é retornando que deu certo!
        res.status(200).json(usuarios.rows); //rows é as linhas, todas as linhas que foram retornadas na QUERY
    } catch(error){
        console.error(`Erro ao listar usuários`, error.message);
        res.status(500).json({error: `Erro ao listar usuários`})
    }
}) 

export default router