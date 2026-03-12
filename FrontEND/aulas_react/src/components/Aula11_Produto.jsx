const Aula11_Produto = ({ produto }) => { //dentro de produto já temos todas as categorias necessárias! 
    return( //não precisamos ficar passando um por um
        <div style={estilos.cardProduto}>
            <img src={produto.imagem} alt="imagem do produto" style={estilos.img}/>
            <h2 style={estilos.titulo}>{produto.nome}</h2>
            <p style={estilos.preco}>R$ {Number(produto.preco).toFixed(2)}</p>
            <p>{produto.categoria}</p>
            {/* frete gratis - utilizando do IF TERNÁRIO */}
            {/* {produto.freteGratis == true ? <p>Frete Grátis</p> : null} */} 
            {produto.freteGratis == true && <p>Frete Grátis</p>}
            <a href={produto.linkproduto} style={estilos.botao}>Ver Produto</a>
        </div>
    )
}

const estilos = {
    cardProduto: {
        border: "1px solid #ccc",
        padding: 10,
        width: 250
    },


    img: {
        height: 150,
        width: "100%",
        objectFit: "contain"
    },


    titulo: {
        fontSize: 14,
        color: "#333",
        textAlign: "center"
    },


    preco: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#e30613"
    },


    botao: {
        display: "inline-block",
        background: "#e30613",
        color: "white",
        textDecoration: "none",
        padding: "8px 12px",
        borderRadius: 5,
        marginTop: 10,
        fontWeight: "bold"
    },


    freteGratis: {
        fontWeight: "bold"
    }
};

export default Aula11_Produto