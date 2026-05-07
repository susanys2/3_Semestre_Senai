import {View, Text, FlatList } from 'react-native';
import Hr from './Hr';
import Aula03_Exercicio1 from './Aula03_Exercicio1';
import Aula03_Exercicio2 from './Aula03_Exercicio2';


const Aula03 = () =>{
    const turmas = [
        { id: 1, turma: '3°B', pontuacao: 100},
        { id: 2, turma: '3°A', pontuacao: 85 },
        { id: 3, turma: '2°B', pontuacao: 90 },
        { id: 4, turma: '2°A', pontuacao: 100},
    ]

    function exibirItensLista ({item}) {
        return(
        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>{item.id}°</Text>
            <Text style={{ flex: 1, textAlign: 'left'}}>Turma:{item.turma}</Text>
        </View>
        )
    }

    //Precisamos duplicar para não aparecer nos dois!!! - Tanto no flatlist quanto no interclasse
    function exibirItensInterclasse ({item}) {
        return(
        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{ flex: 1, textAlign: 'left'}}>{item.id}°</Text>
            <Text style={{ flex: 1, textAlign: 'left'}}>Turma: {item.turma}</Text>
            <Text style={{ flex: 1, textAlign: 'left'}}>Pontuação: {item.pontuacao}</Text>
        </View>
        )
    }

    return(
        <View>
            <Hr/>
            <Text>Aula 03 - Listas com FlatList</Text>
            <Text>Aprendendo a manipular listas com React Native</Text>
            <Hr/>
            {
            turmas.map( (item) => ( //item = variavel que contem toda a linha de cada turma inserida em turmas - acredito que seja mais para representar
                <Text key={item.id}>Turma: {item.turma}</Text> //colocamos key para saber qual linha estamos clicando
            ) ) //receber cada um dos itens quando ele passar nessa função - nesse caso são 4 vezes
            }
            <Hr/>
            { /*Criando listas utilizando componente FlatList */ }
            <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}} >Lista com FlastList</Text>
            <FlatList
                data={ turmas } //Passando vetor com os DADOS a serem EXBIDOS - PEGANDO BASE DE DADOS TURMA
                renderItem={ exibirItensLista } //Passando função para EXIBIR os ITENS - DESENHANDO ESSA FUNÇÃO
                keyExtractor={ item => item.id } //Passando função para EXTRAIR as CHAVES
            />

            {/*Criando classificação pro interclasse do SESI*/}
            <Hr/>
            <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}} >Interclasse SESI</Text>
            <FlatList
                data={ turmas } //Passando vetor com os DADOS a serem EXBIDOS - PEGANDO BASE DE DADOS TURMA
                renderItem={ exibirItensInterclasse } //Passando função para EXIBIR os ITENS - DESENHANDO COM A FUNÇÃO DO INTERCLASSE
                keyExtractor={ item => item.id } //Passando função para EXTRAIR as CHAVES
                />

            <Aula03_Exercicio1/>
            <Aula03_Exercicio2/>
        </View>
    )
}

export default Aula03;