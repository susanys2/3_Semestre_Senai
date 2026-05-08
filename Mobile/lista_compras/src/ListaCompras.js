import React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Image, StatusBar, RefreshControl } from 'react-native';
import Estilos, { corPrincipal, corPlaceHolder } from './Estilos.js';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { corSecundaria } from './Estilos.js';
//Importando configuração e funções firebase e firestore
import { firestore } from '../firebase.config.js';
import { collection, addDoc, getDocs, query, orderBy, doc, updateDoc, deleteDoc, where } from 'firebase/firestore';

const ListaCompras = () => {
    //Variável de estado que receberá os dados do input do item
    const [item, setItem] = useState('');

    //Criando vetor da nossa lista compras - - - - - agora podemos inicia-lo sempre como vazio 
    const [listaCompras, setListaCompras] = useState([]);

    //Atualizando - - -variavel de estado para o refresh atualizar ela
    const [atualizando, setAtualizando] = useState(false);

    async function buscarDados() { //basicamente a mesma coisa que fazemos na API, porém no firestore
        //Representa como: SELECT * FROM compras 
        const comando = query(collection(firestore, 'compras'))
        //Precisamos buscar na nossa base
        const dadosBD = await getDocs(comando); //complemento do nosso SELECT - buscando todos os complementos dessa coleção
        //Colocar dentro da variável lista de compras
        //é um vetor
        const novaLista = dadosBD.docs.map((doc) => (
            { id: doc.id, ...doc.data() }
        ))
        setListaCompras(novaLista);

    }

    useEffect(() => {
        buscarDados();
    }, [])

    async function botaoExcluir(id) {
        await deleteDoc(doc(firestore, 'compras', id));
        buscarDados();

    }

    async function botaoAtualizar(item) {
        const docRef = doc(firestore, 'compras', item.id)
        await updateDoc(docRef, { comprado: !item.comprado })
        buscarDados();
    }

    function exibirItens({ item }) {
        return (
            <TouchableOpacity style={Estilos.botaoItem} onPress={() => botaoAtualizar(item)}>
                {/* condição                    ESTILO NORMAL             ESTILO COMPRADO      */}
                <Text style={item.comprado == false ? Estilos.textoBotaoItem : Estilos.textoBotaoItemComprado}> {item.produto} </Text>
                <MaterialIcons name="delete-sweep" size={24} color={corPrincipal} onPress={() => botaoExcluir(item.id)} />
            </TouchableOpacity>
        )
    }

    async function botaoAdicionar() { //precisamos colocar o async para usar o await dentro da função
        const novoItem = { produto: item, comprado: false }

        //Adicionar documento no Firebase - "Quero que voce grave na tabela compras meu novo itemw"
        const docRef = await addDoc(collection(firestore, 'compras'), novoItem);
        console.log(`Documento inserido`, docRef);

        buscarDados();
        setItem('');

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

                {/* Totalizadores */}
                <View style={Estilos.viewContadores}>
                    <View>
                        <Text style={Estilos.contador1}>Total de itens</Text>
                        {/*length significa tamanho: quantos itens nos temos registrados */}
                        <Text style={Estilos.numero}>{listaCompras.length}</Text>
                    </View>

                    <View>
                        <Text style={Estilos.contador2}>Comprados</Text>
                        {/*length significa tamanho: quantos itens nos temos registrados */}
                        <Text style={Estilos.numero}>{listaCompras.filter(item => item.comprado == true).length}</Text>
                    </View>
                </View>

                <FlatList
                    data={listaCompras}
                    renderItem={exibirItens} //precisamos criar a função exibirItens para mostrar os itens da lista!!!!
                    keyExtractor={item => item.id}
                    refreshControl={
                        <RefreshControl refreshing={atualizando} onRefresh={buscarDados} />
                    }

                />

            </View>
        </View>
    )
}

export default ListaCompras;