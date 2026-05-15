import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

//Telas criadas - páginas
import Home from './Home';
import Cadastro from './Cadastro';
import Relatorio from './Relatorio';
import Grafico from './Grafico';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';


//Criando nossa constante que cria o estilo de navegação em Stack
const Tab = createBottomTabNavigator();

function NavBottomTabs() {
    return (
        // todas as telas precisam estar dentro de um NavigationContainer
        <NavigationContainer>
            <Tab.Navigator>
                {/* Em name colocamos o nome da tela que será chamado no navigate  - precisa ser igual!! */}
                {/* Em component colocamos o componente que queremos renderizar */}
                <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({size, color}) => (<MaterialIcons name="home" size={size} color={color}/>)
                }} />
                <Tab.Screen name="Cadastro" component={Cadastro} 
                options={{
                    tabBarIcon: ({size, color}) => (<MaterialIcons name="login" size={size} color={color}/>)
                }} />
                <Tab.Screen name="Relatorio" component={Relatorio}
                options={{
                    tabBarIcon: ({size, color}) => (<MaterialIcons name="newspaper" size={size} color={color}/>)
                }} />
                <Tab.Screen name="Grafico" component={Grafico}
                options={{
                    tabBarIcon: ({size, color}) => (<MaterialIcons name="pie-chart" size={size} color={color}/>)
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}


export default NavBottomTabs;