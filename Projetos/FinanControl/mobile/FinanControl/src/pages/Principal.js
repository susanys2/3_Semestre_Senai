import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "react-native-web";

export default function Principal({ navigation }) {

    const [dadosLogin, setDadosLogin] = useState(null)

    useEffect( () => {
        async function buscarUsuario(){
            const usuarioLogado = await AsyncStorage.getItem(`UsuarioLogado`)
            if (usuarioLogado){
                setDadosLogin(JSON.parse(usuarioLogado))
            }
        }
        buscarUsuario()
    }, []);

    function botaoLogout (){
        AsyncStorage.removeItem(`UsuarioLogado`)
        setDadosLogin(null)
        navigation.navigate(`Login`)
    }

    return (
        <View style={{flex:1}} >
            <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                padding: 10
            }}>
                <Text style={{fontSize: '18px'}} >Uusário: {dadosLogin?.usuario?.nome || ''}</Text>
                <Button onClick={botaoLogout}>Sair</Button>
            </View>
            <Text>Principal</Text>
        </View>
    )
}