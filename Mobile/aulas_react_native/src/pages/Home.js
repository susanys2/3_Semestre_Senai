import { View, Text, Button } from 'react-native'

//Toda vez que vamos criar uma tela com navegação, precisamos colocar o NAVIGATION entre chaves!
//Praticamente recebendo como props para poder realizar essa navegação entre as telas.
function Home({ navigation }) {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',
            backgroundColor: '#c4bdf3'
        }}>
        {/* Nos botões, no onPress dizemos para qual tela queremos navegar */}
        <Text style={{fontSize: 30}}>TELA PRINCIPAL</Text>
        {/* Navegando para a página de cadastro */}
        <Button title='Tela de Cadastro' onPress={() => navigation.navigate(`Cadastro`) }></Button>
        {/* Navegando para a página de relatório */}
        <Button title='Tela de Relatório' onPress={() => navigation.navigate(`Relatorio`) }></Button>
        {/* Navegando para a página de relatório */}
        <Button title='Tela de Grafico' onPress={() => navigation.navigate(`Grafico`) }></Button>
        </View>
    )
}

export default Home; 