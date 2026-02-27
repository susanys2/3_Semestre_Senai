import { useState } from "react";
import { estilos } from "../style/Estilos"
import Aula07_Perfil from "./Aula07_Perfil"
import Aula09_Numero from "./Aula09_Numero";
import Aula09_ListaNomes from "./Aula09_ListaNomes";
import Aula10 from "./Aula10";

const Aula09 = () => {
    const [numerosSorteados, setNumerosSorteados] = useState([10, 43, 28, 2])

    const [listaPerfis, setListaPerfis ] = useState([
        {"nome": "Diogo", "foto": "https://tse4.mm.bing.net/th/id/OIP.UF-gmvY1iFxXDL_dHPmuHgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"},
        {"nome": "Pablo", "foto": "https://tse4.mm.bing.net/th/id/OIP.UF-gmvY1iFxXDL_dHPmuHgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"}
    ])

    function botaoSortear() {
        const novoNumero = Math.floor(Math.random() * 60 + 1)
        setNumerosSorteados([...numerosSorteados, novoNumero]) 
    }

    function botaoExcluir(nr){
        const novosNumeros = numerosSorteados.filter((numero) => numero != nr)
        setNumerosSorteados(novosNumeros)
    }

    return (
        <div style={estilos.cardAula}>
            <h2>Aula 09 - Listas em React</h2>
            <h3>Exibindo conteúdos dinamicamente como listas</h3>
            <hr />

            <button onClick={botaoSortear}>Novo número</button>

            <h3>Lista de números sorteados:</h3>
            {/* a função map é como o FOR para arrays/vetores */}
            {
                numerosSorteados.map((numero, index) => (
                    <Aula09_Numero key={index} numero={numero} excluir={() => botaoExcluir(numero)}/>
                ))
            }
            <div style={{display: "flex"}}>
            {
                listaPerfis.map((perfil, index) => (
                    <Aula07_Perfil key={index} nome={perfil.nome} foto={perfil.foto} />
                ))
            }
            </div>

            <Aula09_ListaNomes/>
            <Aula10/>
            
        </div>
    );
};

export default Aula09;
