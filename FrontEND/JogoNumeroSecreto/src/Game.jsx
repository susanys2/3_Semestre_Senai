import { useState } from 'react'
import { estilos } from './GameEstilos'

const Game = () => {
    const [numeroSecreto, setSecreto] = useState(sortearnumero)
    const [chute, setChute] = useState('')
    const [mensagem, setMensagem] = useState('Adivinhe um número entre 1 e 100 👀')
    const [tentativas, setTentativas] = useState(1)
    const [jogoFinalizado, setJogoFinalizado] = useState(false)

    function sortearnumero(){
        return Math.floor(Math.random() * 100) + 1
    }

    function botaoChutar(){
        if(numeroSecreto == chute){
            setMensagem(`Acertou 😮!! Voce conseguiu em ${tentativas} tentativas!`)
            setJogoFinalizado(true)
        } else if (numeroSecreto < chute){
            setMensagem(`Voce chutou muito baixooo com ${chute}, tente um número menor!`)
            setChute('')
            setTentativas(tentativas + 1)
        } else{
            setMensagem(`Voce chutou muito baixooo com ${chute}, tente um número maior!`)
            setChute('')
            setTentativas(tentativas + 1)
        }
    }

   function botaoReiniciar () {
    setChute('')
    setJogoFinalizado(false)
    setTentativas(1)
    //SETtentativas
    setMensagem(`Escolha um número entre 1 100 👀`)
    setSecreto(sortearnumero)
        
   }

    return (
        <section style={estilos.container} >
            <div style={estilos.conteudo} >
                <div style={estilos.informacoes}>
                    <div style={estilos.texto} >
                        <h1 style={estilos.h1} >Jogo Número Secreto</h1>
                        <p style={estilos.mensagem} >{mensagem} </p>
                    </div>
                    <input onChange={(event) => setChute(event.target.value)} value={chute}
                    type='number' style={estilos.chute} ></input>
                    <div style={estilos.botoes}>
                        <button style={estilos.botao} onClick={botaoChutar} >Chutar</button>
                        <button style={estilos.botao} onClick={botaoReiniciar} >Novo Jogo</button>

                    </div>

                </div>
                <img src='./img/ia.png' style={estilos.imagem}/>

            </div>

        </section>
    )

}

export default Game