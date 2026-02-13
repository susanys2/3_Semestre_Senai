import { estilos } from "../style/Estilos"
import Aula04_FIlmes from "./Aula04_Filmes"
import Aula04_IMC from "./Aula04_IMC"

const Aula04_Props = () => {
    return(
        <div style={estilos.cardAula}>
            <h2>Aula 04 - Props</h2>
            <h3>Criação de componentes reutilizáveis e suas criações</h3>
            <hr></hr>
            <Aula04_IMC nome='Jorge' peso={80} altura={1.80} cor='#02c4c4'/>
            <Aula04_IMC nome='Susany' peso={69} altura={1.70} cor='#5435a3'/>
            <Aula04_IMC nome='Marcos' peso={50} altura={1.50}cor='#073ac5'/>
            <hr/>
            <Aula04_FIlmes foto='https://i0.wp.com/otageek.com.br/wp-content/uploads/2022/03/Novo-Filme-da-Disney-e-Pixar-RED-Crescer-E-Uma-Fera-estreia-exclusivamente-no-Disney-Otageek-1.jpg?fit=349%2C512&ssl=1' titulo='RED: CRESCER É UMA FERA' genero='Genero: Animação'  ano='Ano: 2022'/>
            <Aula04_FIlmes foto='https://www.themoviedb.org/t/p/original/o6sBKORoLi26V5aQCdGQB33LVnC.jpg' titulo='A PRINCESA E O SAPO' genero='Genero: Animação'  ano='Ano: 2009'/>
            <Aula04_FIlmes foto='https://tse2.mm.bing.net/th/id/OIP.Wy_KymZgUUpWslprKvAV5gAAAA?rs=1&pid=ImgDetMain&o=7&rm=3' titulo='O CÃO E A RAPOSA' genero='Genero: Animação' ano='Ano: 1981'/>
            <Aula04_FIlmes foto='https://media.fstatic.com/CKxbI7bTnuYNNYTuy2BWDdCwyeM=/322x478/smart/filters:format(webp)/media/movies/covers/2017/08/p29095_p_v8_ak.jpg' titulo='LILO E STITCH' genero='Genero: Animação'  ano='Ano: 2002'/>

        </div>
    )
}

export default Aula04_Props