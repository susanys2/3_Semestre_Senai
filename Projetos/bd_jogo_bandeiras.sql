create table perguntas (
id_pergunta SERIAL PRIMARY KEY,
bandeira_url VARCHAR(1080),
opcao_1 VARCHAR(300),
opcao_2 VARCHAR(300),
opcao_3 VARCHAR(300),
opcao_4 VARCHAR(300),
resposta_correta VARCHAR(300)
);

INSERT INTO perguntas (bandeira_url, opcao_4, resposta_correta)
VALUES ('https://th.bing.com/th/id/R.591a7417c75e5b5d91ffd451cc7a7ce0?rik=b6GJBbyizMpxQw&riu=http%3a%2f%2fgeo5.net%2fimagens%2fBandeira-da-Alemanha-2000px.png&ehk=bpz4oE7CW25JkClcwNmsEMKzKL6LoA9RP6yp0qY0Cc4%3d&risl=&pid=ImgRaw&r=0', 'Alemanha', 'Alemanha');




