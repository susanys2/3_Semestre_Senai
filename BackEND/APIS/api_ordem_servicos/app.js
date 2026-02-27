import express from 'express';
import {BD, testarConexao} from './db.js';
import rotasUsuarios from './src/routes/rotasUsuarios.js';
import rotasDepartamentos from './src/routes/rotasDepartamentos.js'

//Usando Swagger
import swaggerUi from 'swagger-ui-express';
import documentacao from './config/swagger.js';

const app = express(); //para importar a conexão
app.use(express.json());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(documentacao))


app.get('/', async(req, res) =>{
    await testarConexao();
    // res.status(200).json('API Funcionado');
    res.redirect('/swagger')
})

//Utilizando Rotas 
app.use(rotasUsuarios);
app.use(rotasDepartamentos);

const porta = 3000;
app.listen(porta, () =>{
    console.log(`http://localhost:${porta}`);
})
