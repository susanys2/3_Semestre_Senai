
const Aula09_Nome = ({pessoa, index, excluir}) => {
    return (
        <p>
            {pessoa}
            <button onClick={excluir} >Excluir</button>
        </p> 
    )

}

export default Aula09_Nome