import { useState } from "react"


const Aula07_Perfil = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10,
            border: '1px solid #ccc',
            padding: 20,
            width: 220,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            borderRadius: 12,
            margin: 10
        }}>
            <Avatar />
            <InfoUsuario />
            <BotaoSeguir />
        </div>
    )

}

export const Avatar = () => {
    return (
        <img style={{width:200, height:200, borderRadius:'50%'}} src="https://tse2.mm.bing.net/th/id/OIP.W7e1IaewnMMDt5mQgBgsdAAAAA?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3"></img>
    )

}
export const InfoUsuario = () => {
    return (
        <p>Laniela Almeida</p>
    )

}
export const BotaoSeguir = () => {
     const [seguindo, setSeguindo] = useState(false)

    return (
        <button onClick={() => setSeguindo(!seguindo)} style={{ 
            backgroundColor: seguindo == false ? '#18f000' : '#ba1b1b',
            color:'#ffff',
            border: 'none',
            padding: '10px 16px',
            borderRadius: 8
        }}>
            
        {seguindo == false ? "Seguir" : "Deixar de seguir"}
        
        </button>
    )
    

}

/** @type {{ [key: string]: import('react').CSSProperties }} */

const estilos = {
    loginConteudo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: '20px',
        margin: '10px auto',
        width: '200px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px',
        gap: '5px',


    },
    logo: {
        height: '50px',

    },

    label: {
        display: 'block',
        fontWeight: 'bold'

    },

    input: {
        width: '100%',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #fff',

    },

    tituloLogin: {
        fontSize: '30px',
        padding: '5px',
        color: '#be0b0b',

    },

    botao: {
        width: '100%',
        backgroundColor: '#38be0b',
        color: '#fff',
        padding: '10px',
        border: 'none',
        borderRadius: '4px',

    },

    campos: {
        width: '100%'
    }


}

//exportando componente padrão PRINCIPAL
export default Aula07_Perfil