import express from 'express';

//Importando o Banco de Dados
import { BD, testarConexao } from "./db.js";

import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());


app.get('/', async (req, res) => {
    await testarConexao();
    res.status(200).json('API FUNCIONANDO ✅');
});

const porta = 3000;
app.listen(porta, () => {
    console.log(`http://localhost:${porta}`);

});