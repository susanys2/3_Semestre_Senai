//Esse tipo de documento consegue documentar a nossa API
//Além de servir como uma ferramenta para a gente testar
//Ele não é nossa API - nós ainda precisamos montar as rotas e tudo  - dependente da API

//TRABALHAMOS COM LETRAS MINUSCULAS DENTRO DE OBJETOS 
const documentacao = {
    openapi: `3.0.3`,
    info: {
        title: `API Ordens de Serviços`,
        description: `Documentação da API de Ordens de Serviços`,
        version: `1.0.0`
    }, //conseguimos colocar quantos servidores a gente quer aqui 
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Localhost'
        }
    ],
    tags: [ //cada separação que temos ele vai para um local especifico 
        { name: "Usuários", description: "Operações relacionadas aos usuários" },
        { name: "Departamentos", description: "Operações relacionadas a departamentos" },
        { name: "Ordem de Serviços", description: "Ordem de realização de pedidos"}
    ],
    paths: {
        "/usuarios": {
            get: {
                tags: ["Usuários"],
                summary: "Listar Usuários",
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso!",
                        content: {
                            "apllication/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schemas/Lista_Usuarios" } //aqui é como se fosse uma ancoragem 
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ["Usuários"],
                summary: "Cadastrar novo usuário",
                description: "Recebe nome, email, senha para cadastrar novo usuário",
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
                        description: "Usuário cadastrado com sucesso"
                    },
                    400: {
                        description: "Erro na requisição(Dados Faltantes - preencha todos os campos)"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }

            }
            },
            "/usuarios/{id_usuario}": {
                put: {
                    tags: ['Usuários'],
                    summary: "Atualizar usuário completo",
                    description: "Atualiza todos os campos de um usuário existente, sendo necessário enviar todos os campos(nome, email, senha)",
                    parameters: [
                        {
                            name: "id_usuario",
                            in: "path",
                            required: true,
                            description: "ID do Usuário a ser atualizado",
                            schema: { type: "integer" },
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
                            content: { "application/json": { example: "Usuário atualizado" } }
                        },
                        400: {
                            description: "Usuário não encontrado",
                            content: { "application/json": { example: "Usuário não encontrado" } }
                        },
                        500: {
                            description: "Erro no Servidor",
                        }
                    }
                }
            },
        
        "/departamentos": {
            get: {
                tags: ["Departamentos"],
                summary: "Listar Departamentos",
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso!",
                        content: {
                            "apllication/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schemas/Lista_Departamentos" }
                                }
                            }
                        }
                    }
                }

            },
            post: {
                tags: ["Departamentos"],
                summary: "Cadastrar novo departamento",
                description: "Recebe nome e descrição para cadastrar novo departamento",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastro_Departamentos"
                            }

                        }
                    }
                },
                responses: {
                    201: {
                        description: "Departamento cadastrado com sucesso"
                    },
                    400: {
                        description: "Erro na requisição(Dados Faltantes - preencha todos os campos)"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            },
        },
        "/departamentos/{id_departamento}":{
            put: {
                    tags: ['Departamentos'],
                    summary: "Atualizar departamento completo",
                    description: "Atualiza todos os campos de um departamento existente, sendo necessário enviar todos os campos(nome, descricao)",
                    parameters: [
                        {
                            name: "id_departamento",
                            in: "path",
                            required: true,
                            description: "ID do Departamento a ser atualizado",
                            schema: { type: "integer" },
                            example: 1
                        }
                    ],
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: { $ref: "#/components/schemas/Atualizacao_Departamento" }
                            }
                        }

                    },
                    responses: {
                        200: {
                            description: "Departamento atualizado com sucesso",
                            content: { "application/json": { example: "Departamento atualizado" } }
                        },
                        400: {
                            description: "Departamento não encontrado",
                            content: { "application/json": { example: "Departamento não encontrado" } }
                        },
                        500: {
                            description: "Erro no Servidor",
                        }
                    }
                },
        },
        "ordem_servicos":{
            get: {
                tags: ["Ordem de Serviços"],
                summary: "Listar Ordem de Serviços",
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso!",
                        content: {
                            "apllication/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schemas/Lista_OrdemServicos" } //aqui é como se fosse uma ancoragem 
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ["Ordem de Serviços"],
                summary: "Cadastrar nova Ordem de Serviço",
                description: "Recebe numero_ordem, titulo, descricao e prioridade para cadastrar novo usuário",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastro_OrdemServicos"
                            }

                        }
                    }
                },
                responses: {
                    201: {
                        description: "Ordem de Serviços cadastrado com sucesso"
                    },
                    400: {
                        description: "Erro na requisição(Dados Faltantes - preencha todos os campos)"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }

            },
        },
        "/ordem_servicos/{id_ordem}":{
            put: {
                    tags: ['Ordem de Serviços'],
                    summary: "Atualizar ordem de serviços completo",
                    description: "Atualiza todos os campos de ordem de serviços existente, sendo necessário enviar todos os campos(numero_ordem, titulo, descricao, prioridade, id_usuario, id_departamento)",
                    parameters: [
                        {
                            name: "id_ordem",
                            in: "path",
                            required: true,
                            description: "ID da Ordem de Serviço a ser atualizado",
                            schema: { type: "integer" },
                            example: 1
                        }
                    ],
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: { $ref: "#/components/schemas/Atualizacao_OrdemServicos" }
                            }
                        }
                    },
                    responses: {
                        200: {
                            description: "Ordem de Serviços atualizado com sucesso",
                            content: { "application/json": { example: "Ordem de Serviços atualizado" } }
                        },
                        400: {
                            description: "Ordem de Serviços não encontrado",
                            content: { "application/json": { example: "Ordem de Serviços não encontrado" } }
                        },
                        500: {
                            description: "Erro no Servidor",
                        }
                    }
                }
        },

        components: { //aqui é praticamente objeto dentro de objeto 
            schemas: {
                Lista_Usuarios: {
                    type: "object",
                    properties: {
                        id: { type: "integer", example: 1 },
                        nome: { type: "string", example: "Ricardo" },
                        email: { type: "string", example: "ricardo@email.com" }
                    }
                },

                Cadastro_Usuario: {
                    type: "object",
                    properties: {
                        nome: { type: "string", example: "Ricardo" },
                        email: { type: "string", example: "ricardo@email.com" },
                        senha: { type: "string", example: "123" }
                    }
                },
                Atualizacao_Usuario: {
                    type: "object",
                    required: ["nome", "email", "senha"],
                    properties: {
                        nome: { type: "string", example: "Ricardo" },
                        email: { type: "string", example: "ricardo@email.com" },
                        senha: { type: "string", example: "123" },

                    }

                },
                Lista_Departamentos: {
                    type: "object",
                    properties: {
                        id: { type: "integer", example: 1 },
                        nome: { tpe: "string", example: "Manutenção" },
                        descricao: { type: "string", example: "Setor de manutenção geral" }
                    }
                },
                Cadastro_Departamentos: {
                    type: "object",
                    properties: {
                        nome: { type: "string", example: "Sala de Robótica" },
                        descricao: { type: "integer", example: "Sala com pertences relacionados a tecnologia para estudos práticos" }
                    }
                },
                Atualizacao_Departamento:{
                    type: "object",
                    required: ["nome", "descricao"],
                    properties: {
                        nome: { type: "string", example: "Sala de Informática" },
                        descricao: { type: "string", example: "Sala de computadores de ultima geração para uso coletivo dos alunos" },
                    }
                },
                Lista_OrdemServicos:{
                    type: "object",
                    properties: {
                        id: { type: "integer", example: 1 },
                        numero_ordem: { tpe: "string", example: 2 },
                        titulo: {type: "string", example: "Manutenção na Lampada"},
                        descricao: { type: "string", example: "Setor de manutenção geral" }
                    }

                },
                Cadastro_OrdemServicos: {
                    type: "object",
                    properties: {
                        numero_ordem: { type: "string", example: 2 },
                        titulo: { type: "string", example: "Cadeira quebrada" },
                        descricao: { type: "string", example: "Manutenção de cadeira na sala de informática" },
                        prioridade: { type: "string", example: "Alta" },
                        id_usuario: { type: "string", example: 1 },
                        id_departamento: { type: "string", example: 1 }
                    }
                },
                Atualizacao_OrdemServicos:{
                    type: "object",
                    required: ["nome", "descricao"],
                    properties: {
                        nome: { type: "string", example: "Sala de Informática" },
                        descricao: { type: "string", example: "Sala de computadores de ultima geração para uso coletivo dos alunos" },
                    }
                },
            }
        }


    }

}

export default documentacao 