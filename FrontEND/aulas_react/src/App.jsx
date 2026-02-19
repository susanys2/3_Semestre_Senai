import Cabecalho from "./components/Cabecalho";
import Aula01 from "./components/Aula01";
import Aula02 from "./components/Aula02";
import Aula03 from "./components/Aula03";
import Aula04_Props from "./components/Aula04_Props";
import { estilos } from "./style/Estilos";
import Aula05_Eventos from "./components/Aula05_Eventos";
import Aula06 from "./components/Aula06";
import Aula07 from "./components/Aula07";

const App = () => { //o return so consegue enviar um elemento pai, sem essa div
  //agora aqui nos vamos incluir o componente que nos criamos
  // e a mesma coisa de copiarmos e colarmos o codigo, so que de maneira mais simplificada 
  return (
  <div style={estilos.fundo}>
      <Cabecalho aula='React'/>
    <main style={estilos.conteudo}>      
        <h2>Aulas</h2>
        <div style={estilos.lista_aulas}>
          {/*aqui será colocado todos os componentes de Aula */}
          <Aula01/>
          <Aula02/>
          <Aula03/>
          <Aula04_Props/>
          <Aula05_Eventos/> 
          <Aula06/>
          <Aula07/> 
        </div>
    </main>   
  </div>
     )
}

export default App;