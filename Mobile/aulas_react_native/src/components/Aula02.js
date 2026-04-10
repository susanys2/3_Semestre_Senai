import { useState } from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import Logo from '../assets/logo.png'
import { Button } from 'react-native-web'

export default function Aula02() {
    const [nome, setNome] = useState('')

    return (
        <View >
            <Text>--------------------------------------</Text>
            <Text>Aula02 - Componentes Básicos</Text>
            <Text>Conhecendo os principais componentes do React Native</Text>

            {/* Inserindo imagem da Internet */}
            <Image source={{ uri: 'https://img.freepik.com/fotos-gratis/planeta-terra-em-estilo-de-desenho-animado_23-2151079668.jpg' }}
            style={{ width: 300, height: 200}}
            />

            <Image
                source={require ('../assets/logo.png')}
                style={{width: 50, height: 50}}
                />

            {/* Inserindo imagem referenciando como um componente! */}
            {/* Fazendo isso de maneira local  - - - - - - - - - - */}
            <Image
            source={Logo}
            style={{width: 50, height: 50}}
            />

            <TextInput
                placeholder='Digite seu nome:'
                //Não precisamos colocar uma Arow Function ()=>
                onChangeText={setNome} 
                style={{borderWidth: 1, padding: 10, marginBottom: 10}}           
            />

            <Text>Seu nome é {nome}</Text>
            <Button title='Clique Aqui' 
            onPress={() => console.log(`Bem-vindo ${nome}`)}/>
        </View>
    )

}