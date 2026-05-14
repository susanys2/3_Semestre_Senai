import { View, Text, Button } from 'react-native'

//Toda vez que vamos criar uma tela com navegação, precisamos colocar o NAVIGATION entre chaves!
//Praticamente recebendo como props para poder realizar essa navegação entre as telas.
function Grafico({ navigation }) {
    return (
        <View style={{
            flex: 1, justifyContent: 'center', alignItems: 'center',
            backgroundColor: '#c4bdf3'
        }}>
            {/* Nos botões, no onPress dizemos para qual tela queremos navegar */}
            <Text style={{ fontSize: 30 }}>TELA DE GRÁFICO</Text>
            {/* Navegando para a página de Relatório */}
            <Button title='Tela de Relatório' onPress={() => navigation.navigate(`Relatorio`)}></Button>
            {/* Navegando para a página de Cadastro */}
            <Button title='Tela de Cadastro' onPress={() => navigation.navigate(`Cadastro`) }></Button>
            {/* Voltando para a tela anterior - mesma funcionalidade do botão VOLTAR */}
            <Button title='voltar' onPress={() => navigation.goBack()}></Button>
        </View>
    )
}

export default Grafico; 