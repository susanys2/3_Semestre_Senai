import express from 'express';
import {BD, testarConexao} from './db.js';
import rotasAgendamentos from './src/routes/rotasAgendamentos.js';
import rotasServicos from './src/routes/rotasServicos.js';
import rotasUsuarios from './src/routes/rotasUsuarios.js';
import rotasDashboard from './src/routes/rotasDashboard.js'; 

//Usando Swagger
import swaggerUi from 'swagger-ui-express';
import documentacao from './config/swagger.js';
import cors from 'cors';

const app = express(); //para importar a conexão
app.use(express.json()); //permitir que leve o formato json para o banco de dados
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(documentacao))
app.use(cors());


app.get('/', async(req, res) =>{
    await testarConexao();
    // res.status(200).json('API Funcionado');
    res.redirect('/swagger')
})

//Utilizando Rotas 
app.use(rotasAgendamentos);
app.use(rotasServicos);
app.use(rotasUsuarios);
app.use(rotasDashboard);

const porta = 3000;
app.listen(porta, () =>{
    console.log(`http://localhost:${porta}`);
})
