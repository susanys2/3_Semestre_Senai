import express from 'express';
import jogadorController from '../controllers/jogadorController.js';

const router = express.Router();

//rota para listar os jogadores 
//pego os dados   
router.get('/jogadores', jogadorController.listar);

//rota para adicionar livros
//post envia os dados
router.post('/jogadores', jogadorController.adicionar);

//rota para ação
router.post('/jogadores/adicionar-ponto', jogadorController.adicionarPontos);

export default router;