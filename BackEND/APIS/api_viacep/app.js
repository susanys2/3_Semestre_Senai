import express from 'express';

const app = express();

//Criando o PRIMEIRO ENDPOINT 
app.get(`/`, async (req, res) => { //RAIZ
    res.status(200).json(`API FUNCIONANDO`);
})

//Quando eu acessar essa rota..
app.use(`/dogs`, express.static(`public`))

//Criando o segundo endpoint para consumir dados da API VIACEP - nos vamos listar 
app.get(`/cep/:codigo`, async (req, res) => { //precisamos pegar esse codigo e mandar dentro da minha requisição 
    const codigo = req.params.codigo;

    //Método FECH - é o mensageiro que vai até a outra API e traz a resposta!
   const resposta = await fetch(`https://viacep.com.br/ws/${codigo}/json/`)
     const dados = await resposta.json();

     const cidade = dados.localidade;
     const estado = dados.uf;

//    //res.json(dados);
     res.status(201).json({ cidade, estado }); //precisamos colocar como chves pois so assim ele retorna o objeto 

 })


//Criando ENDPOINT STAR WARS
app.get(`/starwars/personagem/:id`, async (req, res) => {
    const {id} = req.params;

    const resposta2 = await fetch(`https://swapi.dev/api/people/${id}/`)
    const dados2 = await resposta2.json();

    const nome = dados2.name;
    const altura = dados2.height;
    const massa = dados2.mass;
    const olhos = dados2.eye_color;

    res.json({ nome, altura, massa, olhos });
})

//Criando ENDPOINT DE DOGUINHOS
app.get(`/dog/:id`, async (req, res)=>{
    const id = req.params.id;
    const url = `https://http.dog/${id}.jpg`;

    res.json({url});

})


const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor rodando http://localhost:${porta}`);

})