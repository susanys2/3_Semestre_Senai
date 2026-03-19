import { useState, useEffect } from "react";
import Aula13_Produto from "./Aula13_Produto";

const Aula13_CRUD_Produtos = () => {
    const [listaProdutos, setListaProdutos] = useState([
        { //primeiro objeto
            nome: "A vida invisivel de Addie Larue",
            preco: 60,
            link_imagem: "https://tse2.mm.bing.net/th/id/OIP.uKzxW3MBv2PRbtoL5vWNewHaLN?rs=1&pid=ImgDetMain&o=7&rm=3",
            link_produto: 'https://www.magazineluiza.com.br/livro-a-vida-invisivel-de-addie-larue-galera/p/ja224gj84k/li/llit/?utm_source=bing&utm_medium=cpc&utm_campaign=bing_eco_per_ven_pla_all_sor_4p_longtail-cresc-std&partner_id=81935&utm_term=81935&msclkid=de18d3e442441a817cacba56fdfcea27&gclid=de18d3e442441a817cacba56fdfcea27&gclsrc=3p.ds',
            categoria: "Livros",
            frete: true
        },
        { //segundo objeto
            nome: "A Seleção: 1",
            preco: 30,
            link_imagem: "https://tse2.mm.bing.net/th/id/OIP.x8-8-fnbjpX415G-uXP9nQHaKn?rs=1&pid=ImgDetMain&o=7&rm=3",
            link_produto: 'https://www.amazon.com.br/sele%C3%A7%C3%A3o-Kiera-Cass/dp/8565765016/ref=asc_df_8565765016?tag=brbngshpdsk-20&linkCode=df0&hvadid=76828591632960&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=147466&hvtargid=pla-4580428019805827&psc=1&msclkid=fa209a2d6c9813b97a95f39facc1c84c',
            categoria: "Livros",
            frete: false
        }

    ]); //quer inicializar como um vetor

    const [nome, setNome] = useState(''); //quer inicializar como uma lista por isso as aspas
    const [preco, setPreco] = useState(''); //quer inicializar como uma lista por isso as aspas
    const [link_imagem, setImagem] = useState(''); //quer inicializar como uma lista por isso as aspas
    const [link_produto, setProduto] = useState(''); //quer inicializar como uma lista por isso as aspas
    const [categoria, setCategoria] = useState('');
    const [frete, setFrete] = useState(false); //verdadeiro - falso - undefined (clicado, não clicado, indefinido)

    //Criando variável de estado para alterar o cadastro
    const[editando, setEditando] = useState(false)
    const [id, setId] = useState('')

    //Função para carregar meus dados
    //Essa função recebe um objeto com todos os dados do produto
    function botaoAlterar(produto){
        setNome(produto.nome)
        setPreco(produto.preco)
        setImagem(produto.link_imagem)
        setProduto(produto.link_produto)
        setCategoria(produto.categoria)
        setFrete(produto.frete)
        setEditando(true)
        setId(produto.id_produto) //coloque nessa variável id essas informações

    }


    const botaoAdiconarProduto = async () => {

        const novoProduto = {
            nome: nome,
            preco: preco,
            link_imagem: link_imagem,
            link_produto: link_produto,
            categoria: categoria,
            frete: frete
        };

//se eu estiver editando ele vai alterar
//se eu nao estiver editando ele vai criar um novo
        try {
            let endpoint = `http://10.130.42.68:3001/produtos`
            let metodo = 'POST'

            if(editando == true){
                endpoint = `http://10.130.42.68:3001/produtos/${id}`
                metodo = 'PUT'
            }

            const resposta = await fetch(endpoint, {
                method: metodo,
                headers: {
                    'Content-Type': ' application/json'
                },
                body: JSON.stringify(novoProduto)
            });

            if (!resposta.ok) {
                throw new Error('Erro ao adicionar produto: ' + resposta)
            }

            buscarDados();
            LimparCamposFormularios();

        } catch (erro) {
            console.error('Erro ao adicionar Produto', erro.message);

        };


    };

    async function botaoExcluir(id_produto)  {

        if(!window.confirm(`Voce tem certeza que deseja excluir?`)) return //isso aqui é so para uma confirmação 

        try {
            const resposta = await fetch(`http://10.130.42.68:3001/produtos/${id_produto}`, { //ele ta mandando nesse id_produto o codigo do produto
                method: 'DELETE',
                
            });

            if (!resposta.ok) {
                throw new Error('Erro ao excluir produto: ' + resposta)
            }
            buscarDados(); //lista novamente os produtos
        } catch (erro) {
            console.error('Erro ao adicionar Produto', erro.message);
        };



    };

    const LimparCamposFormularios = () => {
        setNome('');
        setPreco('');
        setImagem('');
        setProduto('');
        setCategoria('');
        setFrete(false);
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
            const resposta = await fetch(`http://10.130.42.68:3001/produtos`)
            const dados = await resposta.json()
            setListaProdutos(dados)

        } catch (erro) {
            console.log(`Erro ao carregar os dados`, erro.message)
        }
    }


    return (
        <div style={estilos.loginConteudo}>
            <h1>Cadastro de Produtos</h1>

            <div style={estilos.campos}>
                <input type='text' placeholder='Nome' style={estilos.input} value={nome} onChange={(event) => setNome(event.target.value)}></input>
                <input type='number' placeholder='Preço' style={estilos.input} value={preco} onChange={(event) => setPreco(event.target.value)}></input>
                <input type='text' placeholder='URL de imagem' style={estilos.input} value={link_imagem} onChange={(event) => setImagem(event.target.value)}></input>
                <input type='text' placeholder='Link do Produto' style={estilos.input} value={link_produto} onChange={(event) => setProduto(event.target.value)}></input>

                <select style={estilos.campos} value={categoria} onChange={(event) => setCategoria(event.target.value)}>
                    <option value=''>Selecione uma categoria</option>
                    <option value='Eletronicos'>Eletronicos</option>
                    <option value='Produtos de Beleza'>Produtos de Beleza</option>
                    <option value='Livros'>Livros</option>
                    <option value='Decoracao de casa'>Decoração de Casa</option>
                </select>

                <input style={estilos.check}
                    checked={frete}
                    onChange={(event) => setFrete(event.target.value)}
                    type="checkbox" /><span>Frete Grátis</span>
            </div>

            <button onClick={botaoAdiconarProduto} style={estilos.botao}>
            { editando == false ? "Adicionar produto" : "Editar Produto"}
            </button>

            {
                editando == true && <button style={estilos.botao} onClick={LimparCamposFormularios}>Cancelar</button>
            }

            <hr />

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                { //chaves indicando um codigo JavaScript
                    //recebendo o objeto do primeiro item e sua posição - recebendo todo o conteúdo
                    listaProdutos.map((produto, pos) => ( //esse key é como se fosse uma chave única - ele precisa disso (map)!
                        // <p key={pos}>{produto.nome} - R${produto.preco}</p> //precisamos dessa KEy para cada item do map
                        <Aula13_Produto key={pos} produto={produto} botaoExcluir={botaoExcluir} botaoAlterar={botaoAlterar} /> //atributo é o parametro de cima e o da chaves é do pos
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
        width: '100%',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #fff',
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


export default Aula13_CRUD_Produtos