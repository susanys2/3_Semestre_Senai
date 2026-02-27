import { useState } from "react";
import Aula09_Nome from "./Aula09_Nome";

const Aula09_ListaNomes = () => {
    //Varipavel de estado 
    const [nome, setNome] = useState('') //HOOK - funcionalidades do react
    const [listaPresenca, setListaPresenca] = useState([ //esse set é o método para armazenar o valor da variável 
        'Ricardo',
        'Douglas',
        'Edcarlos'
])

    function botaoLimparLista() {
        setListaPresenca([])
    }

    function botaoExcluir() {
        setNome('')
    }

    //precisa pegar o que estou digitando no input, no caso o NOME e colocar na lista de presença
    function botaoAdicionar() {
        setListaPresenca([...listaPresenca, nome]) //o set é quem tem autorização para adicionar/ mudar coisas na lista
        console.log(listaPresenca);
    } //mantem o conteudo atual e adiciona a variavel nome!


    return ( //aqui é onde colocamos tudo do nosso HTML - daqui pra fora é nosso código JavaScript
        <div>
            <h1>Lista de Presença do Churrasco ♨️</h1>
            <hr />

            <input
                type="text" //onChange - ao mudar um valor no meu componente - é um evento
                onChange={(event) => setNome(event.target.value)}
                value={nome}></input>

            <button onClick={botaoAdicionar}>Adicionar</button>

            <div style={{ display: "flex" }}>
                { //para digitar um codigo java aqui dentro, precisamos colocar chaves sempre!!! 
                    listaPresenca.map((pessoa, index) => ( //esse map vai meio que ficar rodando - - - o pessoa é o parametro da nossa arow function 
                        <Aula09_Nome key={index} pessoa={pessoa}/> //o index é a posição do nosso vetor -> 0 1 2 . . .
                    ))
                }
            </div>

            <button onClick={botaoLimparLista}>Limpar Lista</button>


        </div>
    )

}

//exportar como padrao - utilizar em outro arquivo
export default Aula09_ListaNomes