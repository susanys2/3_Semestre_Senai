import { useState } from "react"

const Aula06_Contador = () => {
    const [contador, setContador]= useState(0)

    function botaoDiminuir(){
        if(contador > 0){
            setContador(contador-1)
        }
    }


    return (
        <div>
            <h2>Contadorzinho (❁´◡`❁) N°: {contador} </h2>
            <button onClick={()=> setContador(contador+1)}>Aumentar</button>
            <button onClick={botaoDiminuir}>Diminuir</button>


        </div>
    )
}

export default Aula06_Contador 

//la no contador criamos uma arrow function pois so temos uma função
//la no useState temos o valor vazio, caso nao queiramos nenhum valor 