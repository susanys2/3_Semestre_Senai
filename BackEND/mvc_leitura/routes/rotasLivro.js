import express from 'express';
import livroController from '../controllers/livroController.js';

const router = express.Router();

//rota para listar os livros 
//pego os dados   
router.get('/livros', livroController.listar);

//rota para adicionar livros
//post envia os dados
router.post('/livros', livroController.adicionar);

//rota para marcarcomo lido
router.post('/livros/marcar-lido', livroController.marcarComoLido);

export default router;