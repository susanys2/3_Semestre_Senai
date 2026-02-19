import { useState } from "react"
import { estilos } from "../style/Estilos"

const Aula06_Exercicio_Login = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [mensagem, setMensagem] = useState('')

    function condicao(){
        if (email =='senai@senai.br' && (senha == '123')){
            return setMensagem `Login Bem Sucedido! ✅`
        } else{
            return setMensagem `Email ou Senha Incorretos! ❌`
        }
           
        }

    function sair(){
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
                 <input type='text' onChange={(event) => setEmail(event.target.value)} placeholder='Digite seu email' style={estilos.input}></input>
            </div>

            <div style={estilos.campos}>
                 <label style={estilos.label}>Senha</label>
                 <input type='password' onChange={(event) => setSenha(event.target.value)} placeholder='Digite sua senha' style={estilos.input}></input>
            </div>

            <button style={estilos.botao} onClick={(condicao)}>Entrar</button>
            <p>{mensagem}</p>

            <button style={estilos.botao} onClick={(sair)}>Sair</button>

        </div>

    )
}

export default Aula06_Exercicio_Login

