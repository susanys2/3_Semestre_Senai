//ENTENDENDO O FUNCIONAMENTO DE UM COMPONENTE 

const Aula04_IMC = ( { nome, peso, altura, cor } ) => {

   // let nome = 'Susany';
    //let peso = 69;
    //let altura = 1.73;
    let IMC = peso / (altura * altura); // ** 2 - ou elevado ao dois, que é ao quadrado 
    // Math.sqrt(altura)  - uma formula matematica tambem, que funcionaria 
    

    return(
        <div>
            <h3>Calculadora de IMC</h3>
            <p style={{color: cor}}>Olá {nome}</p> 
            <p>Altura: {altura}m</p> 
            <p>Peso: {peso}</p> 
            <p>IMC: {IMC.toFixed(2)} kg/m²</p> 
            <hr/>
        </div>
    )
}

export default Aula04_IMC