import { useState } from "react"
import { estilos } from "../style/Estilos"


const Aula06_Exercicio_Placar = () => {
    const [contador1, setContador1] = useState(0)
    const [contador2, setContador2] = useState(0)
    const [contador3, setContador3] = useState(0)
    const [contador4, setContador4] = useState(0)

function botaoZerar(){
    setContador1(0)
    setContador2(0)
    setContador3(0)
    setContador4(0)
}

    return (
        <div style={estilos.cardAula}>
            <h1>Contador dos Times ⚽</h1>
            <p>--------------------------------------------------------------------------------</p>
            <h2>Time 1 - São Paulo</h2>
            <h3>{contador1}</h3>
            <button onClick={() => setContador1(contador1 + 1)}>+1 Ponto</button>
            <hr></hr>
            <h2>Time 2 - Corinthians</h2>
            <h3>{contador2}</h3>
            <button onClick={() => setContador2(contador2 + 1)}>+1 Ponto</button>
            <button onClick={(botaoZerar)}>Zerar</button>
            <hr></hr>

            <h1>Contador de Jogo de Basquete 🏀</h1>
            <p>--------------------------------------------------------------------------------</p>
            <h2>Time 1</h2>
            <h3>{contador3}</h3>
            <button onClick={() => setContador3(contador3 + 1)}>+1 Ponto</button>
            <button onClick={() => setContador3(contador3 + 2)}>+2 Ponto</button>
            <button onClick={() => setContador3(contador3 + 3)}>+3 Ponto</button>
            <hr></hr>
            <h2>Time 1</h2>
            <h3>{contador4}</h3>
            <button onClick={() => setContador4(contador4 + 1)}>+1 Ponto</button>
            <button onClick={() => setContador4(contador4 + 2)}>+2 Ponto</button>
            <button onClick={() => setContador4(contador4 + 3)}>+3 Ponto</button>

        </div>

    )
}

export default Aula06_Exercicio_Placar

