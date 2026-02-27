import { useState, useEffect } from "react"
import { estilos } from "../style/Estilos"


const Aula10 = () => {
    const [contador, setContador] = useState(0)

    function botaoContador(){
        const novoContador = contador + 1
        setContador(novoContador)
        //Armazenando localmente nosso contador
        localStorage.setItem(`valorContador`, JSON.stringify(novoContador))
    }

    //O useEffect fica monitorando uma variável e executa
    //a função sempre que ela sofrer uma alteração
    //esse efeito será executado sempre que o "contador" mudar 
    useEffect( () => {
        console.log(contador);
        document.title = `Contagem: ${contador}`
        
    }, [contador])

    //O useEffect é com as chaves [] vazia - o efeito deve ser executado apenas quando a página é carregada 
    useEffect( () => {
        const contadorSalvo = localStorage.getItem(`valorContador`) || 0; //se for um valor que não existe, atribua zero 
        setContador(JSON.parse(contadorSalvo))
    }, [])
    //ao final de tudo isso ele vai manter o mesmo valor!

    return (
        <div style={estilos.cardAula}>
            <h2>Aula 10 - useEffect e localStorage</h2>
            <h3>Conhecendo a Hook useEffect e aprendendo a armazenar dados localmente</h3>
            <hr />


            <p>Você clicou {contador} vezes</p>
            <button onClick={(botaoContador)}>Clique aqui</button>
        </div>
    )
}


export default Aula10