import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

//Telas criadas - páginas
import Home from './Home';
import Cadastro from './Cadastro';
import Relatorio from './Relatorio';
import Grafico from './Grafico';
import Login from './Login';
import NavDrawer from './NavDrawer';

//Criando nossa constante que cria o estilo de navegação em Stack
const Tab = createMaterialTopTabNavigator();

function NavTopTabs() {
    return (
        // todas as telas precisam estar dentro de um NavigationContainer
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Login'>
                {/* Em name colocamos o nome da tela que será chamado no navigate  - precisa ser igual!! */}
                {/* Em component colocamos o componente que queremos renderizar */}
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Cadastro" component={Cadastro} />
                <Tab.Screen name="Relatorio" component={Relatorio} />
                <Tab.Screen name="Grafico" component={Grafico} />
                {/*serve para mostrar ou esconder o cabeçalho (header) da tela no Tab Navigator*/}
                <Tab.Screen name="Login" component={Login} /> 
                <Tab.Screen name="MenuPrincipal" component={NavDrawer} options={{headerShown: false}}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}


export default NavTopTabs;