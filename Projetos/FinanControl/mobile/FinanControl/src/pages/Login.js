import { View, Text, TextInput, TouchableOpacity, Image, Switch } from 'react-native';
import { useState, useEffect } from "react";
import { enderecoServidor } from "../utils";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons"
import { EstilosLogin, coresLogin } from "../styles/EstilosLogin";
import { corFundo2, corPrincipal, Estilos } from "../styles/Estilos";

export default function Login({ navigation }) {

    //Criando as variáveis de Estado
    const [email, setEmail] = useState('ricardo@email.com');
    const [senha, setSenha] = useState('123');
    const [mensagem, setMensagem] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [lembar, setLembrar] = useState(false);


    useEffect(() => {
        async function buscarUsuario() {
            const UsuarioLogado = await AsyncStorage.getItem(`UsuarioLogado`)
            if (UsuarioLogado) {
                const usuario = JSON.parse(UsuarioLogado)
                if (Usuario.lembar == true) {
                    navigation.navigate(`/MenuDrawer`)
                }
            }
        }
        buscarUsuario()
    }, []);


    function alternarVisibilidadeSenha() {
        setMostrarSenha(!mostrarSenha)
    }

    async function botaoEntrar() {
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
                AsyncStorage.setItem(`UsuarioLogado`, JSON.stringify({...dados, lembar}));
                navigation.navigate(`MenuDrawer`);
            } else {
                setMensagem(`Email ou senha incorretos! ❌`)
            }


        } catch (error) { //Deixamos essa mensagem para mostrar exatamente qual é o erro /error.message/
            setMensagem(`Erro ao tentar realizar o Login! ${error.message}`); //Esse error é uma variável que voce define
        }

    }

    return (
        <View style={EstilosLogin.container}>
            <LinearGradient
                colors={[corFundo2, corPrincipal]}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={EstilosLogin.gradiente}
            >

                <View style={EstilosLogin.cabecalho}>
                    <Image source={require('../../assets/logo.png')} style={EstilosLogin.iconeLogo} />
                    <View>
                        <Text style={EstilosLogin.nomeApp}>FinanControl</Text>
                        <Text style={EstilosLogin.subtituloLogin}>O seu Controle Finaneiro</Text>
                    </View>
                </View>

                {/* View Principal */}
                <View style={EstilosLogin.conteudoPrincipal}>
                    <View style={EstilosLogin.formularioLogin}>
                        <Text style={EstilosLogin.titulo} >Acesse sua conta</Text>

                        {/* View de cada input */}
                        <View style={EstilosLogin.grupoInput}>
                            <MaterialIcons name='email' size={EstilosLogin.iconeInput} />
                            <TextInput placeholder='Digite seu Email' placeholderTextColor={coresLogin.placeholder}
                                style={EstilosLogin.input} value={email} onChangeText={setEmail}
                                keyboardType='email-address' autoCapitalize='none'
                            />

                        </View>

                        <View style={EstilosLogin.grupoInput}>
                            <MaterialIcons name='lock' size={EstilosLogin.iconeInput} />
                            <TextInput placeholder='Digite sua Senha' placeholderTextColor={coresLogin.placeholder}
                                style={EstilosLogin.input} value={senha} onChangeText={setSenha}
                                secureTextEntry={!mostrarSenha}
                            />
                            <TouchableOpacity style={EstilosLogin.alternarVisibilidade}
                                onPress={() => setMostrarSenha(!mostrarSenha)}
                            >
                                <MaterialIcons
                                    size={24} color={coresLogin.icone}
                                    name={mostrarSenha == true ? 'visibility-off' : 'visibility'}
                                />

                            </TouchableOpacity>
                        </View>

                        <View style={EstilosLogin.entreOpcoes}>
                            <View style={EstilosLogin.containerCheckbox}>
                                <Switch value={lembar} onValueChange={setLembrar} />
                                <Text style={EstilosLogin.rotuloCheckbox}>Lembrar-me</Text>
                            </View>

                            <Text style={EstilosLogin.esqueceuSenha}>Esqueceu a senha?</Text>
                        </View>

                        <TouchableOpacity style={EstilosLogin.botaoEntrar} onPress={botaoEntrar}>
                            <Text style={EstilosLogin.textoBotaoEntrar}>Entrar</Text>
                        </TouchableOpacity>

                        <Text style={EstilosLogin.mensagemFeedback}>{mensagem}</Text>

                    </View>

                </View>

            </LinearGradient>

        </View>
    )

}