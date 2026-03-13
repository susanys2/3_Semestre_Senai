import { useEffect, useState } from "react";
import { estilos } from '../style/Estilos';
import Aula12_CEP from "./Aula12_CEP";
import Aula12_FakeStore from "./Aula12_FakeStore";

const Aula12 = () => {
    const [imagem, setImagem] = useState('')
    const buscarDados = async () => {
        try {
            //No FECH colocamos o endPoint da API
            //http://localhost:3000/usuarios
            const resposta = await fetch('https://dog.ceo/api/breeds/image/random') //bater na API
            const dados = await resposta.json() //bater na API

            setImagem(dados.message)
        } catch (error) {
            console.log('Erro ao buscar dados:', error);
        }
    }

    useEffect(() => {
        buscarDados()
    }, [])

    return (
        <div style={estilos.cardAula}>
            <h2>Aula 12 - Consumo de APIs</h2>
            <h3>Aprendendo a utilizar APIs em REACT</h3>
            <hr />
            <div>
                <p>Imagem de Cachorro</p>
                <img src={imagem} width={300} style={estilos.imagem} />
                <button onClick={buscarDados} >Exibir Imagem</button>
            </div>
            <hr/>
            <Aula12_CEP />
            <Aula12_FakeStore />

        </div>
    )
}

export default Aula12