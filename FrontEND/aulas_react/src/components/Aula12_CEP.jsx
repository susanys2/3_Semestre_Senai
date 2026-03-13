import { useEffect, useState } from "react";
import { estilos } from '../style/Estilos';

//BUSCANDO CEP
const Aula12_CEP = () => {
    const [cep, setCep] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [bairro, setBairro] = useState('')
    const [localidade, setLocalidade] = useState('')
    const [estado, setEstado] = useState('')

    const buscarDados = async () => {
        try {
            //No FECH colocamos o endPoint da API
            const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`) //bater na API
            const dados = await resposta.json() //bater na API

            setLogradouro(dados.logradouro);
            setBairro(dados.bairro)
            setLocalidade(dados.localidade)
            setEstado(dados.estado)

        } catch (error) {
            console.log('Erro ao buscar dados:', error);
        }
    }

    return (
        <div style={estilos.loginConteudo}>
            <h1 style={estilos.tituloLogin}>Buscar CEP</h1>
            <input type='text' placeholder='Digite um CEP' style={estilos.input} value={cep} onChange={(event) => setCep(event.target.value)}></input>
            <button onClick={buscarDados}>Buscar</button>
            <p>Logradouro: {logradouro}</p>
            <p>Bairro: {bairro}</p>
            <p>Cidade: {localidade}</p>
            <p>Estado: {estado}</p>

        </div>
    )

}

export default Aula12_CEP