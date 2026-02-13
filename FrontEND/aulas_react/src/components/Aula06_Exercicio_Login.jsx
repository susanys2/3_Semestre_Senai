import { useState } from "react"
import { estilos } from "../style/Estilos"

const Aula06_Exercicio_Login = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function condicao(){
        if (email ='senai@senai.br' && (senha = 123)){
            return `Login Bem Sucedido!`
        } else{
            return `Email ou Senha Incorretos!`
        }
           
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
                 <input type='password' placeholder='Digite sua senha' style={estilos.input}></input>
            </div>

            <button style={estilos.botao}>Entrar</button>

        </div>

    )
}

export default Aula06_Exercicio_Login

