//Aqqui é onde importaremos todas as bibliotecas e componentes a serem utilizados
import { StatusBar } from 'expo-status-bar';
//Todo componente visual utilizao em REACT-NATIVE precisa ser importado
import { StyleSheet, Text, View } from 'react-native';

//Componente tradicional
export default function App() {
  return (
    //O componente View, corresponde ao div, main, section, header do html
    <View style={estilos.container}>
      {/* O componente Text corresponde ao p, h1, h2, span do html */}
      <Text style={estilos.titulo}>Hello World ! 🌍</Text>
      <Text style={{ fontWeight: 'bold' }}>Esse é nosso primeiro App</Text>
      {/* Defino e estilizo a barra de status do dispositivo */}
      <StatusBar style="auto" />

      {/* Aqui vamos fazer nossa atividade: */}
      <View style={estilos.container2}>
        <Text style={estilos.azul}>Azul</Text>
        <Text style={estilos.preto}>Preto</Text>
        <Text style={estilos.vermelho}>Vermelho</Text>

      </View>
    </View >
  );
}

//So conseguimos colocar a estilização colocando esse componente!
//Para estilizarmos em React Native, importamos o Stylesheet
//e fazemos um objeto estilização igual ao React
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31d4c6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 25,
  },
  container2: {
    display: 'flex',
    width: '100%'
  },
  azul: {
    textAlign: 'left',
    color: '#007bff'
  },
  vermelho: {
    textAlign: 'center',
    color: "#ff0000",
  },
  preto: {
    textAlign: 'right',
    color: "#000000",
    fontWeight: 'bold'

  }

});
