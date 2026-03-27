//VARIÁVEL DE ESTADO 

import { useState } from "react"
import { estilos } from "../style/Estilos"
import Aula06_Contador from "./Aula06_Contador"
import Aula06_Exercicio_Placar from "./Aula06_Exercicio_Placar"


const Aula06 = () => {
    //Declarando uma variável de estado
    const [nome, setNome] = useState('')
    const [cidade, setCidade] = useState('')
    const [telefone, setTelefone] = useState('')
    //Utilizando do boolean para formaer botão visivel ou invisivel 
    const [visivel, setVisivel] = useState(false)

    function botaoLimpar() {
        setNome('')
        setCidade('')
        setTelefone('')
    }



    return ( //o return é a saida da função 
        <div style={estilos.cardAula}>
            <h2>AUla 06 - Estado de um componente</h2>
            <h3>O hook useState adicona estado a componentes funcionais</h3>
            <hr></hr>

            <input type="text" onChange={(event) => setNome(event.target.value)} value={nome}></input>
            <input type="text" onChange={(event) => setCidade(event.target.value)} value={cidade}></input>
            <input type="text" onChange={(event) => setTelefone(event.target.value)} value={telefone}></input>
            <p>Olá {nome}, voce mora em {cidade} e seu telefone é {telefone}</p>
            <button onClick={botaoLimpar}>Limpar</button>
            <hr></hr>

            <button onClick={() => setVisivel(!visivel)}>
                {visivel == false ? <p>Mostrar Saldo 👀</p> : <p>Ocultar Saldo 🛑</p>}
            </button>

            {visivel == false ? <p> R$ ***,** </p> : <p>R$ 510,00</p>}
            <hr></hr>

            <Aula06_Contador/>
            <div style={estilos.cardAula}><Aula06_Exercicio_Placar/></div>
            
        </div>
    )

}
export default Aula06

// o false significa que nao queremos mostrar
//onChange - atribuimos um valor a variável utilizando ela - por isso adicionamos essa propriedade 