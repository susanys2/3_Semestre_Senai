//FUNÇÃO ANONIMA
const saudacao2 = function (nome) {
    console.log(`Olá ${nome}, tenha um bom dia!! 😊☀️`)
}
saudacao2(`Susany`);

//ARROW FUNCTION - apenas apagamos o function e desenhamos a seta na frente 
const saudacao3 = (nome) => {
    console.log(`Olá ${nome}, tenha um bom dia!! 😊☀️`)
} 
saudacao3(`Susany`);

//FUNÇÃO DE SOMA - ARROW 
const SOMA2 = (n1, n2) => {
    return n1 + n2;
}
console.log(SOMA2(10, 10));

//ARROW FUNCTION DE MANEIRA MAIS RESUMIDA 
const soma4 = (n1, n2) => n1 + n2;
console.log(soma4(2, 10));