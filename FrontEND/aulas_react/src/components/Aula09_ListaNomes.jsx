import { useState } from "react";
import { estilos } from "../style/Estilos"
import Aula09_Nome from "./Aula09_Nome";

const Aula09_ListaNomes = () => {
    const [nome, setNome] = useState('')
    const [listaPresenca, setListaPresenca] = useState(['Douglas Levar Carne', 'Ricardo Levar Frango', 'Edcarlos levar refrigerante'])

   function botaoLimpar(n){
        const novoNome = numerosSorteados.filter((nome) => nome != n)
        setNumerosSorteados(novosNumeros)
    }
    function botaoAdicionar(){
        setNome(novoNome)
    }


    return (
        <div>
            <h1>Lista de Presença do Churrasco</h1>
            <hr/>
            <input type="text" onChange={(event) => setNome(event.target.value)} value={nome}></input>

            <button onClick={botaoAdicionar}>Adicionar</button>
            <button onClick={botaoLimpar}>Limpar Lista</button>

            <div style={{display: "flex"}}>
            {
                listaPresenca.map((nome, index) => (
                    <Aula09_Nome></Aula09_Nome>
                ))
            }
            </div>
            
        </div>
    )

}

export default Aula09_ListaNomes