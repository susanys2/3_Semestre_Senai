//CONDICIONAIS
//apenas o else ele não testa uma condição! - meio que é finalização
const idade = 20 ;

if (idade >= 18  && idade <= 20){
    console.log(`Voce é um jovem adulto! 😘`)
} else if (idade >= 12 && idade < 17){
    console.log(`Voce é um adolescente!`)
} else if(idade < 12){
    console.log(`Voce é apenas uma criança!`)
} else{
    console.log(`Que idade voce tem? 🤔`)
}

//OPERADOR TERNÁRIO - IF TERNÁRIO  
let tema = 'dark'; //trata-se da nossa condiçaõ, tema na cor escura
let fundo;
if (tema == 'dark'){
    fundo = 'preto'; //aqui caso seja verdadeira
} else{
    fundo = 'branco'; //aqui caso seja falso
}

//condição       se verdadeira     senão/falso
tema == 'dark' ? fundo = 'preto' : fundo = 'branco';

