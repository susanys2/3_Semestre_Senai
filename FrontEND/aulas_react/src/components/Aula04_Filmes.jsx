const Aula04_FIlmes = ({foto, titulo, genero, ano}) =>{
    return(
        <div style={estilos.todos}>
        <div style={estilos.loginConteudo}>
            <img style={estilos.banner} src={foto} alt='imagem'></img>
            <h3 style={estilos.titulo} >{titulo}</h3>
            <p>{genero}</p>
            <p>{ano}</p>
            <button style={estilos.botao} >Acessar</button>
        </div>
        </div>
    )
}


/** @type {{ [key: string]: import('react').CSSProperties }} */

const estilos = {
    todos:{
        display: 'inline-block',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: '28px'

    },

    loginConteudo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#d0d0d0',
        padding: '20px',
        margin: '10px auto',
        width: '300px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px',
        gap: '5px',
    
        
    },
    banner: {
        height:'400px',

    },

    label:{
        display: 'block',
        fontWeight: 'bold'

    },

    input:{
        width: '100%',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #fff',

    },
    
    titulo:{
        fontSize: '15px',
        padding: '5px',
        color: '#be0b0b',

    },

    botao:{
        width: '100%',
        backgroundColor: '#be0b0b',
        color:'#fff',
        padding: '10px',
        border: 'none',
        borderRadius: '4px'
    },

    campos:{
        width: '100%'
    }

}

export default Aula04_FIlmes