//OBJETOS
//em um objeto conseguimos colocar outro dentro dele
const pais = {
    "nome": "Brasil",
    "capital": "Brasília",
    "populacao": 210000000,
    "idioma": "Portugues",
    "regiao": {
        "sudeste": "SP/RJ/MG/ES ",
        "sul": "PR/RS/SC",
        "norte": "AM/AC/PR/RO/PA/AP/TO"
    }
}

console.log(pais.capital);
console.log(pais.regiao.sul);

//DESESTRUTURAÇÃO 
// let nome = pais.nome;
// let capital = pais.capital;
// let populacao = pais.populacao;
// let idioma = pais.idioma;
let {nome, capital, populacao, idioma} = pais; //aqui ele está desestruturando de dentro do país 
console.log(nome, capital, populacao, idioma);