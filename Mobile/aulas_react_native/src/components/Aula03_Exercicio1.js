import {View, Text, FlatList } from 'react-native';
import Hr from './Hr';

const Aula03_Exercicio1 = () =>{
    const alunos = [
        { id: 1, nome: 'Susany', materia: 'Portugues', media: 9.5, faltas: 2},
        { id: 2, nome: 'Rafaela', materia: 'Matemática', media: 8.0, faltas: 4},
        { id: 3, nome: 'Gustavo', materia: 'Historia', media: 9.0, faltas: 1 },
        { id: 4, nome: 'Arthur', materia: 'Biologia', media: 10, faltas: 1},
        { id: 5, nome: 'Grazielle', materia: 'Ingles', media: 10, faltas: 0},
    ]

    function exibirItensLista ({item}) {
        return( //a estilização do text é como se estivesse dividindo todo o espaço em branco disponível 
        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{ flex: 1, textAlign: 'left'}}>{item.id}°</Text>
            <Text style={{ flex: 1, textAlign: 'left'}}>Aluno: {item.nome}</Text>
            <Text style={{ flex: 1, textAlign: 'left'}}>Matéria: {item.materia}</Text>
            <Text style={{ flex: 1, textAlign: 'left'}}>Média: {item.media}</Text>
            <Text style={{ flex: 1, textAlign: 'left'}}>N° Faltas: {item.faltas}</Text>
        </View>
        )
    }

    return(
        <View>
            <Hr/>
            <Text>Aula 03_Exercicio1 - Criando lista de alunos</Text>
            <Text>Exercício para criar uma lista de alunos utilizando o FlatList - informações postas lado a lado</Text>
            <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}} >Exercicio 1 - Alunos</Text>
            <FlatList 
                data={ alunos } //Passando vetor com os DADOS a serem EXBIDOS - PEGANDO BASE DE DADOS TURMA
                renderItem={ exibirItensLista } //Passando função para EXIBIR os ITENS - DESENHANDO COM A FUNÇÃO DO INTERCLASSE
                keyExtractor={ item => item.id } //Passando função para EXTRAIR as CHAVES
                />
            <Hr/>
        </View>
    )
}

export default Aula03_Exercicio1;