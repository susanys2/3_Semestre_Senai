import { useState } from "react";
const Aula03_Login = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [mensagem, setMensagem] = useState('')

    const botaoEntrar = () => {
        if (email == 'senai@senai.br' && senha == '123') {
            setMensagem('✅ Login bem sucedido')
        } else {
            setMensagem('❌ Email ou senha incorreto')
        }
    }

    return (
        <div style={estilos.loginConteudo}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbde4nriDD9cTH89oI4wefdHBvHXZtappHGA&s" 
                style={estilos.logo}/>
            <h2>Login</h2>
            <div style={estilos.grupoInput}>
                <label style={estilos.label} >Email</label>
                <input type="text" placeholder='Digite seu email' style={estilos.input} 
                    onChange={(event) => setEmail(event.target.value)} value={email} />
            </div>
            <div style={estilos.grupoInput}>
                <label style={estilos.label}>Senha</label>
                <input type="password" placeholder='Digite sua senha' style={estilos.input} 
                    onChange={(event) => setSenha(event.target.value)} value={senha}/>
            </div>
            <button onClick={botaoEntrar} style={estilos.botao}>Entrar</button>
            <p style={{fontStyle:'bold'}}>{mensagem}</p>
        </div>
    )

}

/** @type {{ [key: string]: import('react').CSSProperties }} */

const estilos = {
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
    logo: {
        height:'50px',

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
    
    tituloLogin:{
        fontSize: '30px',
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


export default Aula03_Login