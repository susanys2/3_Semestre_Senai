import React from 'react';
import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Image, StatusBar } from 'react-native';
import Estilos, { corPrincipal, corPlaceHolder, corSecundaria } from './Estilos.js';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const ListaCompras = () => {
    //Variável de estado que receberá os dados do input do item
    const [item, setItem] = useState('');

    //Criando vetor da nossa lista compras
    const [listaCompras, setListaCompras] = useState([
        { id: 1, produto: 'Cartela de ovos 🍳🥚', comprado: false }, //nao comprei ainda FALSE
        { id: 2, produto: 'Pão de forma 🍞', comprado: true }, //já comprei TRUE
    ]);

    function exibirItens({ item }) {
        return (
            <TouchableOpacity style={Estilos.botaoItem}>
                <Text style={Estilos.textoBotaoItem}> {item.produto} </Text>
                <MaterialIcons name="delete-sweep" size={24} color={corPrincipal} /> 
            </TouchableOpacity>
        )
    }

    function botaoAdicionar(){    
        const novoItem = { id: Date.now(), produto: item, comprado: false } 
        const novaLista = [...listaCompras, novoItem]
        setListaCompras(novaLista);
        setItem(''); {/* Limpa o input após adicionar o item  (clicar no maizinho) */}
        
    }

    return (
        <View style={Estilos.conteudo}> 
            <StatusBar backgroundColor={corPrincipal} barStyle='light-content' />
            <View style={Estilos.header}>
                <Image style={Estilos.logo} source={require('../assets/logo_lista_compras.png')} />
            </View>
            <View style={Estilos.corpo}>
                <View style={Estilos.input_container}>
                    {/* Inserindo o input e o botão de adicionar */}
                    <TextInput
                        placeholder='Adicione um novo item na lista'
                        placeholderTextColor={corPlaceHolder}
                        style={Estilos.input}
                        value={item} onChangeText={setItem}
                    />                                              {/* Aqui estamos apenas referenciando a função */}
                    <TouchableOpacity style={Estilos.botao} onPress={botaoAdicionar} >   
                        <Text style={Estilos.textoBotao}>+</Text> 
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={listaCompras}
                    renderItem={exibirItens} //precisamos criar a função exibirItens para mostrar os itens da lista!!!!
                    keyExtractor={item => item.id}
                />

            </View>
        </View>
    )
}

export default ListaCompras;