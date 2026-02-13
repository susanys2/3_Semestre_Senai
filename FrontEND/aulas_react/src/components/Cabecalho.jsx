import logoReact from '../assets/react.svg' //a logo foi importada aqui em cima, de outro lugar 
import '../style/Cabecalho.css'

const Cabecalho = ( {aula} ) => { //aqui montamos um componente
    return ( //aqui dentro nos retornamos codigos HTML //colocamos entre chaves quando nos importamos assim 
        <header className='cabecalho'> 
            <img src={logoReact} alt='' /> 
            <div>
                <h1>SENAI - Desenvolvimento de Sistemas</h1>
                <p>Aulas de Front-end - { aula }</p>
            </div>
            <img src='https://3.bp.blogspot.com/-49JPww66x2g/WpYGvJVyHuI/AAAAAAAAMIY/V7WXOhVF34AhHwD0GXE3-rdjKNxH1zXtgCLcBGAs/s1600/SESI-SENAI.jpg' alt='' />
        </header>
    )
}

export default Cabecalho