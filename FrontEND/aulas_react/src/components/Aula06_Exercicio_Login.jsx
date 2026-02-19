import { useState } from "react"

const Aula06_Exercicio_Login = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [mensagem, setMensagem] = useState('')

    const condicao = () => {
        if (email =='senai@senai.br' && (senha == '123')){
            return setMensagem (`Login Bem Sucedido! ✅`)
        } else{
            return setMensagem (`Email ou Senha Incorretos! ❌`)
        }
           
        }

    const sair = () => {
        setEmail('')
        setSenha('')
        setMensagem('')
    }
    

    return (
       <div style={estilos.loginConteudo}>
                <img style={estilos.logo} src="https://tecservice.com.br/wp-content/uploads/2024/05/senai-logo.jpg"></img>
                <h2 style={estilos.tituloLogin}>Login</h2>

            <div style={estilos.campos}>
                 <label style={estilos.label}>Email</label>
                 <input type='text' 
                 onChange={(event) => setEmail(event.target.value)} 
                 placeholder='Digite seu email' style={estilos.input} value={email}></input>
            </div>

            <div style={estilos.campos}>
                 <label style={estilos.label}>Senha</label>
                 <input type='password' 
                 onChange={(event) => setSenha(event.target.value)} 
                 placeholder='Digite sua senha' style={estilos.input} value={senha}></input>
            </div>

            <button style={estilos.botao} onClick={(condicao)}>Entrar</button>

            <button style={estilos.botao} onClick={(sair)}>Limpar</button>
            <hr></hr>
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
        borderRadius: '4px',
       
    },

    campos:{
        width: '100%'
    }
    

}

export default Aula06_Exercicio_Login
