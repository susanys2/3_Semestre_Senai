import { estilos } from "../style/Estilos"
import Aula07_MultComponentes, { MeuComponenteNomeado, MeuComponenteNomeado2, enderecoLocalHost } from "./Aula07_MultComponentes"
import Aula07_Perfil, { Avatar, BotaoSeguir, InfoUsuario } from "./Aula07_Perfil"
import Aula07_Perfil_Correcao from "./Aula07_Perfil_Correcao"

const Aula07 = () => {
    return (
        <div style={estilos.cardAula}>
            <h1>Aula 07 - Importação de Módulos</h1>
            <h3>Compreendendo Importação e Exportação padrão ou nomeada</h3>
            <hr></hr>

            <Aula07_MultComponentes />
            <MeuComponenteNomeado />
            <MeuComponenteNomeado2 />
            <p>{enderecoLocalHost}</p>
            <div style={estilos.cardAula}>
                <h1>Criando um Perfilzinho</h1>
                <Aula07_Perfil />
        
            </div>

        </div>
    )
}


export default Aula07