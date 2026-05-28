import { useNavigate, Link } from "react-router-dom"
import { useState } from "react";
import { enderecoServidor } from "../utils";
import logo from "../assets/logo.png";
import { EstilosLogin } from "../styles/EstilosLogin";

import { MdEmail, MdLock, MdVisibility, MdVisibilityOff } from "react-icons/md"; //esse md vem de material desing - o tipo de icones 


export default function Login() {
    const navigate = useNavigate();

    //Criando as variáveis de Estado
    const [email, setEmail] = useState('ricardo@email.com');
    const [senha, setSenha] = useState('123');
    const [mensagem, setMensagem] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);

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
            const dadosLogin = {
                "email": email,
                "senha": senha
            }                    //Estamos concatenando com nosso /Login 
            const resposta = await fetch(`${enderecoServidor}/Login`, {
                method: 'POST',//O método do Login é ele
                headers: { 'Content-Type': 'application/json' }, //Estamos enviando um arquivo JSON
                body: JSON.stringify(dadosLogin) //Esse comando converte o objeto para JSON 
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

    function alternarVisibilidadeSenha() {
        setMostrarSenha(!mostrarSenha)
    }

    return (
        <div style={EstilosLogin.container}>
            <header style={EstilosLogin.cabecalho} >
                <img src={logo} style={EstilosLogin.iconeLogo}></img>
                <div>
                    <h1 style={EstilosLogin.nomeApp}> FinanControl</h1>
                    <p style={EstilosLogin.subtituloApp}> O seu controle financeiro</p>
                </div>
            </header>

            <main style={EstilosLogin.conteudoPrincipal} >
                <form style={EstilosLogin.formularioLogin}>
                    <h2 style={EstilosLogin.titulo}>Acesse sua conta</h2>
                    <div style={EstilosLogin.grupoInput}>
                        <MdEmail style={EstilosLogin.iconeInput}></MdEmail>
                        <input type="email" style={EstilosLogin.input}
                            placeholder="Digite o seu Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div style={EstilosLogin.grupoInput}>
                        <MdLock style={EstilosLogin.iconeInput}></MdLock>
                        <input
                            type={mostrarSenha == true ? 'text' : 'password'}
                            style={EstilosLogin.input}
                            placeholder="Digite a sua Senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                        <button type="button" onClick={alternarVisibilidadeSenha}
                            style={EstilosLogin.alternarVisibilidade}>
                            {mostrarSenha == true ? <MdVisibility /> : <MdVisibilityOff />}
                        </button>
                    </div>

                    <div style={EstilosLogin.entreOpcoes}>
                        <div style={EstilosLogin.containerCheckbox}>
                            <input type="checkbox" style={EstilosLogin.checkbox} />
                            <label>Lembrar-me</label>
                        </div>
                        <a href="#" style={EstilosLogin.esqueceuSenha}>Esqueceu a senha?</a>
                    </div>
                    <button type="submit" style={EstilosLogin.botaoEntrar} onClick={botaoEntrar} >
                        Entrar
                    </button>

                    <p style={EstilosLogin.mensagemFeedback}>{mensagem}</p>

                </form>
            </main>

        </div>
    );
} 