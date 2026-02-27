//Arquivo responsável por armazenar as conexoes com o SUPABASE 
//IMPORTAR TAMBEM E TESTAR AS CONFIGURAÇÕES DE CONEXÃO

import { Pool } from 'pg';

const BD = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'bd_ordem_servicos',
    port: 5432,
    password: 'admin'
})

//const BD = new Pool({
//    user: 'postgres',
//    host: 'db.lfqmmqjzjjcmkgwhyesh.supabase.co',
//    database: 'postgres',
//   port: 5432,
//    password: 'bancodedadossenai'
//})

const testarConexao = async () => {
    try {
        const cliente = await BD.connect(); //aqui é novamente o nosso objeto - método chamado connect 
        console.log('Conexão realizada com sucesso!');
        cliente.release(); //esse método libera a conexão!!
    }
    catch (error) { //aqui é caso ele de erro de conexão
        console.error('Erro ao conectar ao banco de dados', error.message)
    }
}

export { BD, testarConexao };