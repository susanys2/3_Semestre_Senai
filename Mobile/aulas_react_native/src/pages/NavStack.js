import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Home';
import Cadastro from './Cadastro';
import Relatorio from './Relatorio';
import Grafico from './Grafico';
import Login from './Login';
import NavDrawer from './NavDrawer';

//Criando nossa constante que cria o estilo de navegação em Stack
const Stack = createNativeStackNavigator();

function NavStack() {
    return (
        // todas as telas precisam estar dentro de um NavigationContainer
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                {/* Em name colocamos o nome da tela que será chamado no navigate  - precisa ser igual!! */}
                {/* Em component colocamos o componente que queremos renderizar */}
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
                <Stack.Screen name="Relatorio" component={Relatorio} />
                <Stack.Screen name="Grafico" component={Grafico} />
                {/*serve para mostrar ou esconder o cabeçalho (header) da tela no Stack Navigator*/}
                <Stack.Screen name="Login" component={Login} /> 
                <Stack.Screen name="MenuPrincipal" component={NavDrawer} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default NavStack;