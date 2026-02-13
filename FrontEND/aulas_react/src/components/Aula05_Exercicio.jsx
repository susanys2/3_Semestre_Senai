import { estilos } from "../style/Estilos"

const Aula05_Exercicio = () => {
    function botaoClique() {
        alert(`Clicou no botão, né?? 😐`)
    }
    function botaoClique2() {
        alert(`Clicou no botão DE NOVO??? 🙄`)
    }
    function entradaMouse(event) {
        console.log(`Mouse Entrou`)
        event.target.style.backgroundColor = '#ffd87d';
    }

    function saidaMouse(event) {
        console.log(`Mouse Saiu`)
        event.target.style.backgroundColor = '#ff6e51';
    }

    function alterarCor(event) {
        if (event.key == 'a') {
            event.target.style.backgroundColor = '#0c0cb4';
            event.target.style.color = '#ffffff';
        } else if (event.key == 'p') {
            event.target.style.backgroundColor = '#000000';
        } else if (event.key == 'v') {
            event.target.style.backgroundColor = '#ff0000';
        } else if (event.key == 'y') {
            event.target.style.backgroundColor = '#ffee00';
        } else if (event.key == 'g') {
            event.target.style.backgroundColor = '#00ff1a';
        }
    }

    return (
        <div style={estilos.cardAula}>
            <h2>Exercícios com difentes cliques! 😘☀️</h2>
            <hr></hr>

            <p>Evento onClick - BOTÕES</p>
            <button onClick={botaoClique}>Clique Aqui!</button>
            <button onClick={botaoClique2}>Clique Aqui!</button>
            <hr></hr>

            <p>Evento onChange - Exibindo no console 💻</p>
            <input onChange={(event) => alert(event.target.value)} type="text" placeholder="Digite aqui..."></input>
            <select onChange={(event) => alert(event.target.value)}>
                <option value="Mamao">Fruta</option>
            </select>
            <hr></hr>

            <p>Quadradinho mudando de cor</p>
            <p style={estilos.quadrado} onMouseEnter={entradaMouse} onMouseLeave={saidaMouse}>Passe o mouse aqui!</p>
            <hr></hr>

            <p>Evento onKeyDown - pressionando tecla</p>
            <input type="text" onKeyDown={(event) => alert(event.key)}></input>
            <input type="text" onKeyDown={alterarCor}
                placeholder="a - azul, v - verde, c - cinza, r - roxo"></input>
            <hr></hr>

            <p>Evento incorporando TODOS</p>
            <input type="text" style={estilos.quadrado} onMouseEnter={entradaMouse} onMouseLeave={saidaMouse}
            onKeyDown={(event) => alert(event.key)} 
            onClick={botaoClique} ></input>
            

        </div>

    )
}

export default Aula05_Exercicio
