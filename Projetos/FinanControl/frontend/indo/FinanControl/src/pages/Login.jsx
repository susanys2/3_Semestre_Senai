import { useNavigate, Link } from "react-router-dom"
import { useState } from "react";
import { enderecoServidor } from "../utils";


export default function Login() {
    const navigate = useNavigate();

    //Criando as variáveis de Estado
    const [email, setEmail] = useState('ricardo@email.com');
    const [senha, setSenha] = useState('123');
    const [mensagem, setMensagem] = useState('');

    //Estamos usando esse event - é para mobile
    async function botaoEntrar(event) {
        //"EUuu vou controlar o que fazer com esse evento"
        event.preventDefault(); //Evita com que a página seja recarregada assim que fazemos algo

        //Caso de algum erro ele aciona sua excessão
        try { //Precisamos usar dois para igual e nao 3 - Se não queremos dizer EXTRITAMENTE igual em conteúdo e tipo!
            if (email == '' || senha == '') {
                setMensagem(`Preencha todos os campos!`)
                return; //Para a execução do código aqui, não seguindo o próximo passo
            }
            //Tudo o que digitamos no input nos recebemos aqui 
            const Login = {
                "email": email,
                "senha": senha
            }                    //Estamos concatenando com nosso /Login 
            const resposta = await fetch(`${enderecoServidor}/Login`, {
                method: 'POST',//O método do Login é ele
                headers: { 'Content-Type': 'application/json' }, //Estamos enviando um arquivo JSON
                body: JSON.stringify(Login) //Esse comando converte o objeto para JSON 
            })
            if (resposta.status == 404) {
                setMensagem(`Rota não encontrada: ${resposta.url}`)
                return; //Vai dar isso quando não encontrar a rota do Login 
            } 
            const dados = await resposta.json(); //Tudo o que está sendo respondido na API está dentro dessa variável dados

            if (resposta.status == 500) {
                setMensagem(dados.message)
                return
            }

            if (resposta.ok) {
                //Se a resposta for ok, vamos armazenar esse Login no localStorage - para que tenhamos o token salvo!
                localStorage.setItem(`UsuárioLogado`, JSON.stringify(dados));
                navigate('/principal');
            } else {
                setMensagem(`Email ou senha incorretos! ❌`)
            }


        } catch (error) { //Deixamos essa mensagem para mostrar exatamente qual é o erro /error.message/
            setMensagem(`Erro ao tentar realizar o Login! ${error.message}`); //Esse error é uma variável que voce define
        }

    }


    return (
        <div>
            <h1>Tela de Login</h1>
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu email" />
            <br />
            <label>Senha</label>
            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Digite sua senha" />

            <button onClick={botaoEntrar}>Entrar</button>

            <p style={{ color: '#f00' }}> {mensagem} </p>
        </div>
    );
} 