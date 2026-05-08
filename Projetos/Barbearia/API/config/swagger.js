import { application, request } from "express";

const documentacao = {
    openapi: '3.0.3',
    info: {
        title: 'API Barbearia',
        description: 'Documentação API Barbearia',
        version: '1.0.0'
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Servidor Localhost'
        }
    ],
    tags: [
        { name: "Usuários", description: "Operações relacionadas aos Usuários" },
        { name: "Serviços", description: "Operações relacionadas aos Serviços" },
        { name: "Agendamentos", description: "Operações relacionadas aos Agendamentos" },

    ],
    paths: {
        "/usuarios": {
            get: {
                tags: ["Usuários"],
                summary: "Listar Usuários",
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schemas/Lista_Usuarios" }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ["Usuários"],
                summary: "Cadastrar novo usuário ",
                description: "Recebe nome, email, senha para cadastrar novo usuario",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastro_Usuario"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Usuario cadastrado com sucesso"
                    },
                    400: {
                        description: "Erro na requisição(preencha todos os campos)"
                    },
                    500: {
                        description: "Erro interno so Servidor"
                    }
                }
            }
        },
        "/usuarios/{id_usuario}": {
            put: {
                tags: ["Usuários"],
                summary: "Atualizar usuário completo",
                description: "Atualiza todos os campos de um usuário existente, sendo necessário envir todos os campos(nome, email, senha)",
                parameters: [
                    {
                        name: "id_usuario",
                        in: "path",
                        required: true,
                        description: "Id do usuário a ser atualizado",
                        schema: { type: 'integer' },
                        example: 1
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizacao_Usuario" }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Usuário atualizado com sucesso",
                        content: { "application/json": { example: "Usuário não encontrado" } }
                    },
                    404: {
                        description: "Usuário não encontrado",
                        content: { "application/json": { example: "Usuário não encontrado" } }
                    },
                    500: {
                        description: "Erro no Servidor"
                    }
                }
            },
            delete: {
                tags: ["Usuários"],
                summary: "Remover o usuário",
                description: "Remove o usuário",
                parameters: [
                    {
                        name: "id_usuario",
                        in: "path",
                        required: true,
                        description: "Id do usuário a ser removido",
                        schema: { type: 'integer' },
                        example: 1
                    }
                ],
                responses: {
                    200: {
                        description: "Usuário removido com sucesso",
                        content: { "application/json": { example: "Usuário não encontrado" } }
                    },
                    500: {
                        description: "Erro no Servidor"
                    }
                }
            }
        },
        "/login": {
            post: {
                tags: ["Usuários"],
                summary: "Realizar Login ",
                description: "Autentica um usuario e retorna seus dados",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Login_Usuario"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Login realizado com sucesso com sucesso",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Resposta_Login"
                                }
                            }
                        }
                    },
                    400: {
                        description: "Erro na requisição(preencha todos os campos)"
                    },
                    500: {
                        description: "Erro interno so Servidor"
                    }
                }
            }
        },
        "/servicos": {
            get: {
                tags: ["Serviços"],
                summary: "Listar Serviços",
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schemas/Lista_Servicos" }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ["Serviços"],
                summary: "Cadastrar novo Serviço ",
                description: "Recebe nome, preco e descrição para cadastrar novo Serviço",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastro_Servico"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Serviço cadastrado com sucesso"
                    },
                    400: {
                        description: "Erro na requisição(preencha todos os campos)"
                    },
                    500: {
                        description: "Erro interno so Servidor"
                    }
                }
            }
        },
        "/servicos/{id_servico}": {
            put: {
                tags: ["Serviços"],
                summary: "Atualizar serviço completo",
                description: "Atualiza todos os campos de um serviço existente, sendo necessário envir todos os campos(nome, preco, descrição)",
                parameters: [
                    {
                        name: "id_servico",
                        in: "path",
                        required: true,
                        description: "Id do serviço a ser atualizado",
                        schema: { type: 'integer' },
                        example: 1
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizacao_Servico" }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Serviço atualizado com sucesso",
                        content: { "application/json": { example: "Serviço não encontrado" } }
                    },
                    404: {
                        description: "Serviço não encontrado",
                        content: { "application/json": { example: "Serviço não encontrado" } }
                    },
                    500: {
                        description: "Erro no Servidor"
                    }
                }
            },
            delete: {
                tags: ["Serviços"],
                summary: "Remover o serviço",
                description: "Remove o serviço",
                parameters: [
                    {
                        name: "id_servico",
                        in: "path",
                        required: true,
                        description: "Id do serviço a ser removido",
                        schema: { type: 'integer' },
                        example: 1
                    }
                ],
                responses: {
                    200: {
                        description: "Serviço removido com sucesso",
                        content: { "application/json": { example: "Serviço não encontrado" } }
                    },
                    500: {
                        description: "Erro no Servidor"
                    }
                }
            }
        },
        "/agendamentos": {
            get: {
                tags: ["Agendamentos"],
                summary: "Listar Agendamentos",
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schemas/Lista_Agendamentos" }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ["Agendamentos"],
                summary: "Cadastrar novo agendamento ",
                description: "Recebe data/hora, status, id do cliente e id do serviço, para tal cadastro",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastro_Agendamento"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Agendamento cadastrado com sucesso"
                    },
                    400: {
                        description: "Erro na requisição(preencha todos os campos)"
                    },
                    500: {
                        description: "Erro interno so Servidor"
                    }
                }
            }
        },
        "/agendamentos/{id_agendamento}": {
            put: {
                tags: ["Agendamentos"],
                summary: "Atualizar agendamento completo",
                description: "Atualiza todos os campos de um agendamento existente, sendo necessário enviar todos os campos",
                parameters: [
                    {
                        name: "id_agendamento",
                        in: "path",
                        required: true,
                        description: "Id do agendamento a ser atualizado",
                        schema: { type: 'integer' },
                        example: 1
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizacao_Agendamento" }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Agendamento atualizado com sucesso",
                        content: { "application/json": { example: "Agendamento não encontrado" } }
                    },
                    404: {
                        description: "Agendamento não encontrado",
                        content: { "application/json": { example: "Agendamento não encontrado" } }
                    },
                    500: {
                        description: "Erro no Servidor"
                    }
                }
            },
            delete: {
                tags: ["Agendamentos"],
                summary: "Remover o agendamento",
                description: "Remove o agendamento",
                parameters: [
                    {
                        name: "id_agendamento",
                        in: "path",
                        required: true,
                        description: "Id do agendamento a ser removido",
                        schema: { type: 'integer' },
                        example: 1
                    }
                ],
                responses: {
                    200: {
                        description: "Agendamento removido com sucesso",
                        content: { "application/json": { example: "Agendamento não encontrado" } }
                    },
                    500: {
                        description: "Erro no Servidor"
                    }
                }
            }
        },
    },
    components: {
        schemas: {
            //RELACIONADOS A USUÁRIOS
            Lista_Usuarios: {
                type: "object",
                properties: {
                    id: { type: "integer", example: 1 },
                    nome: { type: "string", example: "Susany" },
                    email: { type: "string", example: "susy@email.com" },
                    tipo: { type: "string", example: "Cliente" }
                }
            },
            Cadastro_Usuario: {
                type: "object",
                properties: {
                    nome: { type: "string", example: "Susany" },
                    email: { type: "string", example: "susy@email.com" },
                    senha: { type: "string", example: "123" },
                    tipo: { type: "string", example: "Cliente" }
                }
            },
            Atualizacao_Usuario: {
                type: "object",
                properties: {
                    nome: { type: "string", example: "Susany" },
                    email: { type: "string", example: "susy@email.com" },
                    senha: { type: "string", example: "123" },
                    tipo: { type: "string", example: "Cliente" }
                }
            },
            Login_Usuario: {
                type: "object",
                required: ["email", "senha"],
                properties: {
                    email: { type: "string", example: "susy@email.com" },
                    senha: { type: "string", example: "123" },
                }
            },
            Resposta_Login: {
                type: "object",
                properties: {
                    message: { type: 'string', example: 'Login realizado com sucesso' },
                    usuario: {
                        type: 'object',
                        properties: {
                            id_usuario: { type: 'integer', example: 1 },
                            email: { type: "string", example: "susy@email.com" },
                            senha: { type: "string", example: "123" },
                        }
                    }
                }
            },

            //RELACIONADOS A SERVIÇOS
            Lista_Servicos: {
                type: "object",
                properties: {
                    id: { type: "integer", example: 1 },
                    nome_servico: { type: "string", example: "Corte Americano" },
                    preco: { type: "number", format: "decimal", example: 30.00 },
                    descricao: { type: "string", example: "Criança de 8 anos agitada." }
                }
            },
            Cadastro_Servico: {
                type: "object",
                properties: {
                    nome_servico: { type: "string", example: "Corte Americano" },
                    preco: { type: "number", format: "decimal", example: 30.00 },
                    descricao: { type: "string", example: "Criança de 8 anos agitada." }
                }
            },
            Atualizacao_Servico: {
                type: "object",
                properties: {
                    nome_servico: { type: "string", example: "Corte Americano" },
                    preco: { type: "number", format: "decimal", example: 30.00 },
                    descricao: { type: "string", example: "Criança de 8 anos agitada." },
                    tipo: { type: "string", example: "Cliente" }
                }
            },

            //RELACIONADOS A AGENDAMENTOS
            Lista_Agendamentos: {
                type: "object",
                properties: {
                    id: { type: "integer", example: 1 },
                    data_hora: { type: "string", example: "09/02/2026" },
                    status: { type: "string", example: "Em Aberto" },
                    id_cliente: { type: "integer", example: 1 },
                    id_servico: { type: "integer", example: 1 }
                }
            },
            Cadastro_Agendamento: {
                type: "object",
                properties: {
                    data_hora: { type: "string", example: "09/02/2026" },
                    status: { type: "string", example: "Em Aberto" },
                    id_cliente: { type: "integer", example: 1 },
                    id_servico: { type: "integer", example: 1 }
                }
            },
            Atualizacao_Agendamento: {
                type: "object",
                properties: {
                    data_hora: { type: "string", example: "09/02/2026" },
                    status: { type: "string", example: "Em Aberto" },
                    id_cliente: { type: "integer", example: 1 },
                    id_servico: { type: "integer", example: 1 }
                }
            },




        }
    }
}

export default documentacao;