import { View, Text, Button } from 'react-native'
import * as Animar from 'react-native-animatable';


//Toda vez que vamos criar uma tela com navegação, precisamos colocar o NAVIGATION entre chaves!
//Praticamente recebendo como props para poder realizar essa navegação entre as telas.
function Login({ navigation }) {
    return (
        <View style={{
            flex: 1, justifyContent: 'center', alignItems: 'center',
            backgroundColor: '#c4bdf3'
        }}>
            {/* Nos botões, no onPress dizemos para qual tela queremos navegar */}
            <Text style={{ fontSize: 30 }}>TELA DE LOGIN</Text>
            {/* Navegando para a página de Menu Principal */}
            <Animar.Button animation='bounceInDown' title='ENTRAR' onPress={() => navigation.navigate(`MenuPrincipal`)}></Animar.Button>

        </View>
    )
}

export default Login; 