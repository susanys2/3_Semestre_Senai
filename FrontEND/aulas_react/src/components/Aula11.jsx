import Aula11_CadastroProdutos from "../components/Aula11_CadastroProdutos";
import { estilos } from "../style/Estilos"

const Aula11 = () => {
    return(
        <div style={estilos.cardAula}>
            <h2>Aula 11 - Cadastro de Produtos</h2>
            <h3>Criando uma lista de produtos e armazenando os dados localmente</h3>
            
            <Aula11_CadastroProdutos/>
        </div>
    )
}

export default Aula11