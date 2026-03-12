import { useEffect, useState } from "react";
import Aula11_Produto from "./Aula11_Produto";

const Aula11_CadastroProdutos = () => {
    const [listaProdutos, setListaProdutos] = useState([
        { //primeiro objeto
            nome: "A vida invisivel de Addie Larue",
            preco: 60,
            imagem: "https://tse2.mm.bing.net/th/id/OIP.uKzxW3MBv2PRbtoL5vWNewHaLN?rs=1&pid=ImgDetMain&o=7&rm=3",
            linkProduto: 'https://www.magazineluiza.com.br/livro-a-vida-invisivel-de-addie-larue-galera/p/ja224gj84k/li/llit/?utm_source=bing&utm_medium=cpc&utm_campaign=bing_eco_per_ven_pla_all_sor_4p_longtail-cresc-std&partner_id=81935&utm_term=81935&msclkid=de18d3e442441a817cacba56fdfcea27&gclid=de18d3e442441a817cacba56fdfcea27&gclsrc=3p.ds',
            categoria: "Livros",
            freteGratis: true
        },
        { //segundo objeto
            nome: "A Seleção: 1",
            preco: 30,
            imagem: "https://tse2.mm.bing.net/th/id/OIP.x8-8-fnbjpX415G-uXP9nQHaKn?rs=1&pid=ImgDetMain&o=7&rm=3",
            linkProduto: 'https://www.amazon.com.br/sele%C3%A7%C3%A3o-Kiera-Cass/dp/8565765016/ref=asc_df_8565765016?tag=brbngshpdsk-20&linkCode=df0&hvadid=76828591632960&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=147466&hvtargid=pla-4580428019805827&psc=1&msclkid=fa209a2d6c9813b97a95f39facc1c84c',
            categoria: "Livros",
            freteGratis: false
        }

    ]); //quer inicializar como um vetor

    const [nome, setNome] = useState(''); //quer inicializar como uma lista por isso as aspas
    const [preco, setPreco] = useState(''); //quer inicializar como uma lista por isso as aspas
    const [imagem, setImagem] = useState(''); //quer inicializar como uma lista por isso as aspas
    const [linkProduto, setProduto] = useState(''); //quer inicializar como uma lista por isso as aspas
    const [categoria, setCategoria] = useState('');
    const [freteGratis, setFreteGratis] = useState(false); //verdadeiro - falso - undefined (clicado, não clicado, indefinido)

    function botaoAdicionar() {

    }

    return (
        <div style={estilos.loginConteudo}>
            <h1>Cadastro de Produtos</h1>

            <div style={estilos.campos}>
                <input type='text' placeholder='Nome' style={estilos.input} value={nome} onChange={(event) => setNome(event.target.value)}></input>
                <input type='number' placeholder='Preço' style={estilos.input} value={preco} onChange={(event) => setPreco(event.target.value)}></input>
                <input type='text' placeholder='URL de imagem' style={estilos.input} value={imagem} onChange={(event) => setImagem(event.target.value)}></input>
                <input type='text' placeholder='Link do Produto' style={estilos.input} value={linkProduto} onChange={(event) => setProduto(event.target.value)}></input>

                <select style={estilos.campos} value={categoria} onChange={(event) => setCategoria(event.target.value)}>
                    <option value=''>Selecione uma categoria</option>
                    <option value='Eletronicos'>Eletronicos</option>
                    <option value='Produtos de Beleza'>Produtos de Beleza</option>
                    <option value='Livros'>Livros</option>
                    <option value='Decoracao de casa'>Decoração de Casa</option>
                </select>

                <input style={estilos.check}
                    checked={freteGratis}
                    onChange={(event) => setFreteGratis(event.target.value)}
                    type="checkbox"/><span>Frete Grátis</span>
            </div>

            <button style={estilos.botao}>Adicionar Produto</button>

            <hr />

            <div style={{display:'flex', gap: 10, flexWrap: 'wrap'}}>
                { //chaves indicando um codigo JavaScript
                //recebendo o objeto do primeiro item e sua posição - recebendo todo o conteúdo
                listaProdutos.map((produto, pos) => ( //esse key é como se fosse uma chave única - ele precisa disso (map)!
                    // <p key={pos}>{produto.nome} - R${produto.preco}</p> //precisamos dessa KEy para cada item do map
                    <Aula11_Produto key={pos} produto={produto}/> //atributo é o parametro de cima e o da chaves é do pos
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


export default Aula11_CadastroProdutos