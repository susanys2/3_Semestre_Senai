import { estilos } from "../style/Estilos"
import Aula05_Exercicio from "./Aula05_Exercicio"

const Aula05_Eventos = () => {

    function botaoClique() {
        alert(`Voce clicou no botão`)
        console.log(`CLique no botão ⏺️`)
    }

    function entradaMouse(event) {
        console.log(`Mouse Entrou`)
        event.target.style.backgroundColor = '#7db5ff';
    }

    function saidaMouse(event) {
        console.log(`Mouse Entrou`)
        event.target.style.backgroundColor = '#7dffb3';
    }

    function alterarCor(event) {
        if (event.key == 'a') {
            event.target.style.backgroundColor = '#0c0cb4';
            event.target.style.color = '#ffffff';
        } else if (event.key == 'v') {
            event.target.style.backgroundColor = '#1d7d00';
        } else if (event.key == 'c') {
            event.target.style.backgroundColor = '#313131';
        } else if (event.key == 'r') {
            event.target.style.backgroundColor = '#58378f';
        }
    }

    return (
        <div style={estilos.cardAula}>
            <h2>EVENTOS EM REACT</h2>
            <h3>Os eventos são fundamentais para criar interatividade em aplicações WEB</h3>
            <hr></hr>

            <p>Evento onClick - clique no usuário em qualquer elemento</p>
            <button onClick={botaoClique}>Clique Aqui!</button>
            <p onDoubleClick={() => alert(`Duplo Clique`)}>Este parágrafo recebe um duplo clique</p>
            <hr></hr>

            <p>Evento onChange - sempre que um campo da entrada é alterado</p>

            <input onChange={(event) => alert(event.target.value)} type="text" placeholder="Digite algo..."></input>

            <select onChange={(event) => alert(event.target.value)}>
                <option value="1°A">1° A EM</option>
                <option value="2°A">2° A EM</option>
                <option value="3°A">3° A EM</option>
                <option value="3°B">3° B EM</option>
            </select>
            <hr></hr>

            <p>Evento onMouseEnter / onMouseLeave - entrando e saindo do elemento</p>
            <p onMouseEnter={entradaMouse} onMouseLeave={saidaMouse}>Passe o mouse aqui!</p>
            <hr></hr>

            <p>Evento onKeyDown - Aciona um evento quando pressiona uma tecla</p>
            <input type="text" onKeyDown={(event) => alert(event.key)}></input>
            <input type="text" onKeyDown={alterarCor}
                placeholder="a - azul, v - verde, c - cinza, r - roxo"></input>

            <Aula05_Exercicio></Aula05_Exercicio>
        </div>

    )
}

export default Aula05_Eventos
