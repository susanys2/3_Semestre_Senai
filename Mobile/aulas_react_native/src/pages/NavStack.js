import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Cadastro from './Cadastro';
import Relatorio from './Relatorio';
import Grafico from './Grafico';

//Criando nossa constante que cria o estilo de navegação em Stack
const Stack = createNativeStackNavigator();


function NavStack() {
    return (
        // todas as telas precisam estar dentro de um NavigationContainer
        <NavigationContainer>
            <Stack.Navigator>
                {/* Em name colocamos o nome da tela que será chamado no navigate */}
                {/* Em component colocamos o componente que queremos renderizar */}
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
                <Stack.Screen name="Relatorio" component={Relatorio} />
                <Stack.Screen name="Grafico" component={Grafico} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavStack;