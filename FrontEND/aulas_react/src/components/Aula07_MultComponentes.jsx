const Aula07_MultComponentes = () =>{
    return(
        <div>
           <p>Meu componente padrão 💯</p>
           <MeuComponenteNomeado/>
        </div>


    )
}

export const MeuComponenteNomeado =()=> {
    return(
        <p>Meu componente nomeado 1</p>
    )

}
export const MeuComponenteNomeado2 =()=> {
    return(
        <p>Meu componente nomeado 2</p>
    )

}

//exportando uma variável - - - - - - - - - -
export const enderecoLocalHost = "localhost"


//EXPORTANDO COMPONENTES E VARIÁVEIS NOMEADAS TUDO DE UMA VEZ
// export {MeuComponenteNomeado, MeuComponenteNomeado2, enderecoLocalHost}


//exportando componente padrão PRINCIPAL
export default Aula07_MultComponentes