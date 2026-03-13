import { useEffect, useState } from "react";
import { estilos } from '../style/Estilos';

const Aula12_FakeStore = () => {
    const [store, setStore] = useState('')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState('')
    const [rating, setRating] = useState('')

    const buscarDados = async () => {
        try {
            //No FECH colocamos o endPoint da API
            const resposta = await fetch(`https://viacep.com.br/ws/${store}/json/`) //bater na API
            const dados = await resposta.json() //bater na API

            setTitle(dados.title);
            setPrice(dados.price);
            setDescription(dados.description);
            setCategory(dados.category);
            setImage(dados.image);
            setRating(dados.rating);

        } catch (error) {
            console.log('Erro ao buscar dados:', error);
        }
    }

    return (
        <div style={estilos.loginConteudo}>
            <h1 style={estilos.tituloLogin}>FAKE STORE</h1>
            <input type='text' placeholder='Digite um numero de 1 a 10' style={estilos.input} value={store} onChange={(event) => setStore(event.target.value)}></input>
            <button onClick={buscarDados}>Buscar</button>
            <p>Titulo: {title}</p>
            <p>Price: {price}</p>
            <p>Descrição: {description}</p>
            <p>Categoria: {category}</p>
            <img src={image} width={300} style={estilos.imagem} />
            <p>Rating: {rating}</p>

        </div>
    )

}

export default Aula12_FakeStore