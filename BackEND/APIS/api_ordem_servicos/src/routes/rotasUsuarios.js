import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

//Criando o endPoint para listar todos os usuários 
//método get tem ação de buscar - sempre vai tá listando alguma coisa 
//Rota de usuarios
router.get('/usuarios', async (req, res) => {
    try {
        //cria uma variável para enviar o comando SQL
        const query = `SELECT * FROM usuarios ORDER BY id_usuario`

        //cria uma variável para receber o retorno do SQL
        const usuarios = await BD.query(query);

        //retorno para a página o JASON com os dados
        //buscados do SQL - - - - o STATUS 200 (de HTTP) é retornando que deu certo!
        res.status(200).json(usuarios.rows); //rows é as linhas, todas as linhas que foram retornadas na QUERY
    } catch (error) {
        console.error(`Erro ao listar usuários`, error.message);
        res.status(500).json({ error: `Erro ao listar usuários` })
    }
})

//Criação de outro endPoint - Possibilidade de invasão
//Criação de um novo usuário 
//O endPoint com parametros diretos no comando SQL, permite o sql injection 
// router.post('/usuarios', async (req, res) => {
//     const nome = req.body.nome; //recebendo a partir do corpo da página  - e atribuindo a essas variáveis 
//     const email = req.body.email; //pegando essa outra chave também e adicionando
//     const senha = req.body.senha; //também

//     try {
//         //colocamos no insert o valor que estamos recebendo aqui em cima!
//         const comando = `INSERT INTO teste(nome, email, senha) 
//     VALUES('${nome}', '${email}', '${senha}')`

//         console.log(comando);
//         await BD.query(comando);
//         res.status(201).json("Usuario Cadastrado!");

//     } catch (error) {
//         console.error('Erro ao cadastrar usuários', error.message);
//         res.status(500).json({ error: 'Erro ao cadastrar usuários' })
//     }
// })

//EndPoint seguro contra sql Injection 
router.post('/usuarios', async (req, res) => {
    const { nome, email, senha } = req.body;

    try {

        const comando = `INSERT INTO USUARIOS(nome, email, senha) 
    VALUES($1, $2, $3)`
        const valores = [nome, email, senha];

        await BD.query(comando, valores);
        console.log(comando, valores);

        res.status(201).json("Usuario Cadastrado!");

    } catch (error) {
        console.error('Erro ao cadastrar usuários', error.message);
        res.status(500).json({ error: 'Erro ao cadastrar usuários' })
    }
})

export default router