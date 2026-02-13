//Aqui temos a criação de um componente PADRÃO
import { estilos } from "../style/Estilos"
const Aula01 = () => {
    return(
        <div style={estilos.cardAula}>
            <h2>Aula 01 - Revisão de JavaScript</h2>
            <h3>Revisão dos principais conceitos de JavaScript</h3>
            <p>Revimos váriaveis e constantes, if, objeto, função, arrow function, UI e UX</p>
        </div>
    )
}

export default Aula01