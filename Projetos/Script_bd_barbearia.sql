CREATE TABLE usuarios(
id_usuario SERIAL PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
email VARCHAR(150) NOT NULL,
senha VARCHAR(255) NOT NULL,
tipo VARCHAR(20) NOT NULL
)

CREATE TABLE servicos(
id_servico SERIAL PRIMARY KEY,
nome_servico VARCHAR(100) NOT NULL,
preco DECIMAL(10,2) NOT NULL,
descricao TEXT NOT NULL
)

CREATE TABLE agendamentos(
id_agendamento SERIAL PRIMARY KEY,
data_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
status VARCHAR(100) NOT NULL,
id_cliente INT,
FOREIGN KEY (id_cliente) REFERENCES usuarios(id_usuario),
id_servico INT,
FOREIGN KEY (id_servico) REFERENCES servicos(id_servico)
)

