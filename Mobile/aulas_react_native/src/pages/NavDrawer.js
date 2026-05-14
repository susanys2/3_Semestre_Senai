import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Cadastro from './Cadastro';
import Relatorio from './Relatorio';
import Grafico from './Grafico';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

//Criando nossa constante que cria o estilo de navegação em Stack
const Drawer = createDrawerNavigator();


function NavDrawer() {
    return (
        // todas as telas precisam estar dentro de um NavigationContainer
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName='Home' //Define qual é a tela inicial
                screenOptions={{ //Primeira chave codigo em jv, segunda um objeto
                    drawerStyle: {
                        backgroundColor: '#c6cbef', //Cor do fundo do menu da lateral com DRAWER
                        width: 240, //Largura do menu da lateral com DRAWER
                    },
                    drawerLabelStyle: { //Estilização para algo ESPECIFICO do menu da lateral com DRAWER
                        fontSize: 18, //Aumentando o tamanho da fonte do menu da lateral com DRAWER
                    },
                    drawerActiveBackgroundColor: '#fff', //Fundo do campo que está ativo no menu lateral com DRAWER  
                    drawerActiveTintColor: '#30236b'
                }}

            >
                {/* Em name colocamos o nome da tela que será chamado no navigate */}
                {/* Em component colocamos o componente que queremos renderizar */}
                <Drawer.Screen name="Home" component={Home}
                    options={{
                        title: 'Tela Inicial',
                        drawerIcon: ({ size, color }) => <MaterialIcons name="home" size={size} color={color} />
                    }} />
                <Drawer.Screen name="Cadastro" component={Cadastro}
                    options={{
                        title: 'Tela de Cadastro',
                        drawerIcon: ({ size, color }) => <MaterialIcons name="login" size={size} color={color} />
                    }} />
                <Drawer.Screen name="Relatorio" component={Relatorio}
                    options={{
                        title: 'Tela de Relatório',
                        drawerIcon: ({ size, color }) => <MaterialIcons name="newspaper" size={size} color={color} />
                    }} />
                <Drawer.Screen name="Grafico" component={Grafico} //o que tá aqui ainda é propriedade do Screen
                    options={{
                        title: 'Tela de Gráfico de Teste', //conseguimos mudar o nome com o que quisemos, independente com o que está lá 
                        drawerIcon: ({ size, color }) => <MaterialIcons name="pie-chart" size={size} color={color} /> //adicionou o icone no menu lateral

                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default NavDrawer;