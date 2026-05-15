import React from 'react';
import { View, Text, Image } from 'react-native';
import Hr from './Hr';
import * as Animar from 'react-native-animatable';

const Aula07 = () =>{
    return(
        <View>
            <Hr/>
            <Text>Aula 07 - Estilos de Navegação Tabs e Animações</Text>
            <Text>Criando navegação do tipo Abas no App e aprendendo sobre animações</Text>
            <Hr/>
            <Animar.Text animation='fadeInLeft' >Texto Animado 1</Animar.Text>
            <Animar.Text animation='fadeInUp' delay={1000} >Texto Animado 2 - Animação com delay</Animar.Text>
            <Animar.Text animation='flipInY' iterationCount={'infinite'} >Texto Animado 3 - Animação infinita</Animar.Text>
            <Animar.Image source={require('../../assets/icon.png')} 
            animation='lightSpeedIn' iterationCount={'infinite'}
            style={{width: 100, height: 100}} />
        </View>
    );
}

export default Aula07;