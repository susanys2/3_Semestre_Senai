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
        return res.status(200).json(usuarios.rows); //rows é as linhas, todas as linhas que foram retornadas na QUERY
    } catch (error) {
        console.error(`Erro ao listar usuários`, error.message);
        return res.status(500).json({ error: `Erro ao listar usuários` })
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

        const comando = `INSERT INTO USUARIOS(nome, email, senha) VALUES($1, $2, $3)`
        const valores = [nome, email, senha];

        await BD.query(comando, valores);
        console.log(comando, valores);

        return res.status(201).json("Usuario Cadastrado!");


    } catch (error) {
        console.error('Erro ao cadastrar usuários', error.message);
        return res.status(500).json({ error: 'Erro ao cadastrar usuários' })
    }
})

//TRATA-SE DO NOSSO MÉTODO DE ATUALIZAÇÃO/EDIÇÃO
//fazemos uma identificação apartir do ID IDENTIFICADOR - pois é unico e não tem erro!
//ESTAMOS FAZENDO ISSO AQUI PARA ATUALIZAR UM ÚNICO USUÁRIO - ENDPOINT - RECEBENDO O PARAMETRO PELO ID 
//E BUSCANDO O USUÁRIO 
router.put('/usuarios/:id_usuario', async(req, res) =>{

    //id recebido via parametro
    const {id_usuario} = req.params;

    //dados do usuario recebido via corpo da página 
    const {nome, email, senha} = req.body;
    try{
        //verificar se o uusário existe 
        const verificarUsuario = await BD.query(`SELECT * FROM USUARIOS
        WHERE id_usuario = $1`, [id_usuario])
        if(verificarUsuario.rows.length === 0){
            return res.status(404).json({message: 'Usuário não encontrado'})
        }

        //Atualiza todos os campos da tabela!! PUT - SUBSTITUIÇÃO COMPLETA
        const comando = `UPDATE USUARIOS SET nome = $1, email = $2, senha = $3 
        WHERE id_usuario = $4`
        const valores = [nome, email, senha, id_usuario]; //aqui colocamos na ordem das informações postas acima no comando 
        await BD.query(comando, valores);

        return res.status(200).json({message: 'Usuário atualizado com sucesso!'}) //indicando que deu certooo
    } catch(error){
        console.error('Erro ao atualizar usuários', error.message);
        return res.status(500).json({error: 'Erro ao atualizar usuários'})
    }
})

export default router