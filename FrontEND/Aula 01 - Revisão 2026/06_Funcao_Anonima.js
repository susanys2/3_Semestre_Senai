//FUNÇÃO NOMEADA
function saudacao(nome) {
    console.log(`Olá ${nome}, tenha um bom dia!! 😊☀️`)
}

saudacao(`Susany`);

//nos vamos transform-la em anonima - - - - - - - - - - - -

//FUNÇÃO ANONIMA
const saudacao2 = function (nome) {
    console.log(`Olá ${nome}, tenha um bom dia!! 😊☀️`)
}

saudacao2(`Susany`);

//FUNÇÃO DE SOMA - NOMEADA
function SOMA(n1, n2) {
    return n1 + n2;
};
console.log(SOMA(10, 7));

//FUNÇÃO DE SOMA - ANONIMA
const SOMA2 = function (n1, n2) {
    return n1 + n2;
}
console.log(SOMA2(10, 10));

