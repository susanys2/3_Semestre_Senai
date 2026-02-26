import express from 'express';
import {BD, testarConexao} from './db.js';

const app = express(); //para importar a conexão

app.get('/', async(req, res) =>{
    await testarConexao();
    res.status(200).json('API Funcionado');
})

const porta = 3000;
app.listen(porta, () =>{
    console.log(`http://localhost:${porta}`);
})
