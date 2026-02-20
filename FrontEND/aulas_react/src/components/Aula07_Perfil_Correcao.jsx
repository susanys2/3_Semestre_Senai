import { useState } from "react"

const Aula07_Perfil_Correcao = ({ foto, nome }) => {
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
        }} >
            <Avatar foto={foto} />
            <Info nome={nome} />
            <BotaoSeguir2 />
        </div>
    )
}

export const Avatar = ({ foto }) => {
    return (
        <img src={foto} alt="" style={{ width: 100, height: 100, borderRadius: '50%' }} />
    )

}
export const Info = ({ nome }) => {
    return (
        <h3>{nome}</h3>
    )

}
export const BotaoSeguir2 = () => {
    const [seguindo, setSeguindo] = useState(false)

    return (
        <button onClick={() => setSeguindo(!seguindo)} style={{ 
            backgroundColor: '#18f000',
            color:'#ffff',
            border: 'none',
            padding: '10px 16px',
            borderRadius: 8
        }}>
            
        {seguindo == false ? "Seguir" : "Deixar de seguir"}
        
        </button>
    )

}

export default Aula07_Perfil_Correcao