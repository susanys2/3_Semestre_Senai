import { useState, useEffect } from "react";
import Aula13_Usuario from "./Aula13_Usuario";

const Aula13_CRUD_Usuarios = () => {
    const [listaUsuarios, setListaUsuarios] = useState([
        { //primeiro objeto
            nome: "Douglas",
            email: "douglas@gmail.com",
            senha: "123",
        },
        { //segundo objeto
            nome: "Ricardo",
            email: "ricardo@gmail.com",
            senha: "123",
        }

    ]); //quer inicializar como um vetor

    const [nome, setNome] = useState(''); //quer inicializar como uma lista por isso as aspas
    const [email, setEmail] = useState(''); //quer inicializar como uma lista por isso as aspas
    const [senha, setSenha] = useState(''); //quer ini0cializar como uma lista por isso as aspas

    //Criando variável de estado para alterar o cadastro
    const [editando, setEditando] = useState(false)
    const [id, setId] = useState('')

    function botaoAlterarUsuario(usuario) {
        setNome(usuario.nome)
        setEmail(usuario.email)
        setSenha(usuario.senha)
        setEditando(true)
        setId(usuario.id_usuario) //coloque nessa variável id essas informações
    }

    async function botaoAdiconarUsuario() {

        const novoUsuario = {
            nome: nome,
            email: email,
            senha: senha,

        };

        try {
            let endpoint = `http://10.130.42.68:3001/usuarios`
            let metodo = 'POST'

            if (editando == true) {
                endpoint = `http://10.130.42.68:3001/usuarios/${id}`
                metodo = 'PUT'
            }

            const resposta = await fetch(endpoint, {
                method: metodo,
                headers: {
                    'Content-Type': ' application/json'
                },
                body: JSON.stringify(novoUsuario)
            });

            if (!resposta.ok) {
                throw new Error('Erro ao adicionar usuário: ' + resposta)
            }

            buscarDados();
            LimparCamposFormularios();

        } catch (erro) {
            console.error('Erro ao adicionar Usuário', erro.message);

        };

        // const novaListaProdutos = [...listaProdutos, novoProduto];
        // setListaProdutos(novaListaProdutos);

        // localStorage.setItem('vetorListaProdutos', JSON.stringify(novaListaProdutos));

    };

    function LimparCamposFormularios() {
        setNome('');
        setEmail('');
        setSenha('');
        setEditando(false);
        setId('');

    };

    useEffect(() => {
        buscarDados()
    }, []);

    //Caso ocorra algum erro ele vai retornar isso
    //Função para buscar os dados de uma API
    async function buscarDados() {
        try {
            const resposta = await fetch(`http://10.130.42.68:3001/usuarios`)
            const dados = await resposta.json()
            setListaUsuarios(dados)

        } catch (erro) {
            console.log(`Erro ao carregar os dados`, erro.message)
        }
    };

    async function botaoExcluir(id_usuario) {

        if (!window.confirm(`Voce tem certeza que deseja excluir?`)) return

        try {
            const resposta = await fetch(`http://10.130.42.68:3001/usuarios/${id_usuario}`, { //ele ta mandando nesse id_produto o codigo do produto
                method: 'DELETE',

            });

            if (!resposta.ok) {
                throw new Error('Erro ao excluir usuários: ' + resposta)
            }
            buscarDados(); //lista novamente os produtos
        } catch (erro) {
            console.error('Erro ao adicionar usuários', erro.message);
        };



    };


    return (
        <div style={estilos.loginConteudo}>
            <h1>Cadastro de Usuários</h1>

            <div style={estilos.campos}>
                <input type='text' placeholder='Nome' style={estilos.input} value={nome} onChange={(event) => setNome(event.target.value)}></input>
                <input type='text' placeholder='Email' style={estilos.input} value={email} onChange={(event) => setEmail(event.target.value)}></input>
                <input type='text' placeholder='Senha' style={estilos.input} value={senha} onChange={(event) => setSenha(event.target.value)}></input>

            </div>

            <button onClick={botaoAdiconarUsuario} style={estilos.botao}>
                {editando == false ? "Adicionar Usuário" : "Editar Usuário"}
            </button>

            {
                editando == true && <button style={estilos.botao} onClick={LimparCamposFormularios}>Cancelar</button>
            }

            <hr />

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                { //chaves indicando um codigo JavaScript
                    //recebendo o objeto do primeiro item e sua posição - recebendo todo o conteúdo
                    listaUsuarios.map((usuario, pos) => ( //esse key é como se fosse uma chave única - ele precisa disso (map)!
                        // <p key={pos}>{produto.nome} - R${produto.preco}</p> //precisamos dessa KEy para cada item do map
                        <Aula13_Usuario key={pos} usuario={usuario} botaoExcluir={botaoExcluir} botaoAlterarUsuario={botaoAlterarUsuario} /> //atributo é o parametro de cima e o da chaves é do pos
                    ))
                }
            </div>
        </div>

    )
}
/** @type {{ [key: string]: import('react').CSSProperties }} */

const estilos = {
    loginConteudo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d0d0d0',
        padding: '20px',
        margin: '10px auto',
        width: '500px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px',
        gap: '5px',
    },

    input: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        width: '100%',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #fff',
    },

    botao: {
        width: '100%',
        backgroundColor: '#be0b0b',
        color: '#fff',
        padding: '10px',
        border: 'none',
        borderRadius: '4px'
    },

    campos: {
        width: '100%',
        gap: '20px'
    },

    check: {
        fontStyle: 'bold',
    },

    botao: {
        width: '100%',
        backgroundColor: '#be0b0b',
        color: '#fff',
        padding: '10px',
        border: 'none',
        borderRadius: '4px'
    },


}


export default Aula13_CRUD_Usuarios