import {View, Text, FlatList, Image } from 'react-native';
import Hr from './Hr';

const Aula03_Exercicio2 = () =>{
    const produtos = [
        { id: 1, foto: <Image source={{ uri: 'https://i5.walmartimages.com/asr/5d9d7d06-6c64-46f8-9b45-f75618c0f37e_1.a2c5368237223933a069f2ed84751e43.jpeg' }}
            style={{ width: 300, height: 200}}
            />, nome: 'Boneca Babby Alive', categoria: 'Brinquedo', preco: 250.00, estoque: 30}, 
        { id: 2, foto: <Image source={{ uri: 'https://a-static.mlcdn.com.br/470x352/jogo-da-memoria-animais-cartas-educativo-mini-toys/bretalleltda/0445a/2908189f77990cb324edd70b7c6b03d4.jpeg' }}
            style={{ width: 300, height: 200}}
            />, nome: 'Jogo da Memoria', categoria: 'Brinquedo', preco: 150.00, estoque: 10}, 
        { id: 3, foto: <Image source={{ uri: 'https://tse1.mm.bing.net/th/id/OIP.hihxM9RoILsIVgV1FNMZ4wHaFj?rs=1&pid=ImgDetMain&o=7&rm=3' }}
            style={{ width: 300, height: 200}}
            />, nome: 'Iphone 12', categoria: 'Eletronico', preco: 3000.00, estoque: 20},
        { id: 4, foto: <Image source={{ uri: 'https://th.bing.com/th/id/R.4fcf54edd5d42338c94108d134700491?rik=Dq7pBOqZ%2fUCU7w&riu=http%3a%2f%2feletro-angeloni-static-prod.s3.amazonaws.com%2fmedia%2fEletro%2flinha_branca%2fGeladeira%2fGeladeira-Refrigerador-Electrolux-Multidoor-Frost-Free-Inox-Ice-Twister-DM84X-Angeloni-1.jpg&ehk=Xp40spcztMqdJlvdkyK2IrFq6V4NlED74JwnkWZpw3w%3d&risl=&pid=ImgRaw&r=0' }}
            style={{ width: 300, height: 200}}
            />, nome: 'Geladeira Electrolux', categoria: 'Eletrodomesticos', preco: 5000.00, estoque: 15}, 
        { id: 5, foto: <Image source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71X245OYRBL.jpg' }}
            style={{ width: 300, height: 200}}
            />, nome: 'A Vida Invisivel de Addie Larue', categoria: 'Livro', preco: 65.00, estoque: 3},
    ]

function exibirItensListaProdutos ({item}){
    return(//aqui está a mesma estrutura de espaçamento dos nossos itens
        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{ flex: 1, textAlign: 'left'}}>{item.id}</Text>
            <Text style={{ flex: 1, textAlign: 'left'}}>{item.foto}</Text>
            <Text style={{ flex: 1, textAlign: 'left'}}>{item.nome}</Text>
            <Text style={{ flex: 1, textAlign: 'left'}}>{item.categoria}</Text>
            <Text style={{ flex: 1, textAlign: 'left'}}>{item.preco}</Text>
            <Text style={{ flex: 1, textAlign: 'left'}}>{item.estoque}</Text>
        </View>
    )
}

    return(
        <View>
            <Text>Aula 03_Exercicio2 - Criando lista de Produtos</Text>
            <Text>Exercício para criar uma lista de produtos utilizando o FlatList - informações postas lado a lado</Text>
            <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}} >Exercicio 2 - Produtos</Text>
            {/* Aqui estamos criando um card com o nome de cada coluna dos produtos */}
            {/* Só precisamos tirar lá de cima a VIEW e mudar para o nome de cada campo */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{ flex: 1, textAlign: 'left', fontWeight: 'bold'}}>ID</Text>
                <Text style={{ flex: 1, textAlign: 'left', fontWeight: 'bold'}}>FOTO</Text>
                <Text style={{ flex: 1, textAlign: 'left', fontWeight: 'bold'}}>NOME</Text>
                <Text style={{ flex: 1, textAlign: 'left', fontWeight: 'bold'}}>CATEGORIA</Text>
                <Text style={{ flex: 1, textAlign: 'left', fontWeight: 'bold'}}>PREÇO</Text>
                <Text style={{ flex: 1, textAlign: 'left', fontWeight: 'bold'}}>ESTOQUE</Text>
            </View>
            <FlatList 
                data={ produtos } //Passando vetor com os DADOS a serem EXBIDOS - PEGANDO BASE DE DADOS TURMA
                renderItem={ exibirItensListaProdutos } //Passando função para EXIBIR os ITENS - DESENHANDO COM A FUNÇÃO DO INTERCLASSE
                keyExtractor={ item => item.id } //Passando função para EXTRAIR as CHAVES
                />
            <Hr/>
        </View> 
    )
} 

export default Aula03_Exercicio2;