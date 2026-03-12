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
        { name: "Departamentos", description: "Operações relacionadas a departamentos" }
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
                    senha: {type: "string", example: "123"}
                }
            },
            Lista_Departamentos: {
                type: "object",
                properties: {
                    id: { type: "integer", example: 1 },
                    nome: { tpe: "string", example: "Manutenção" },
                    descricao: { type: "string", example: "Setor de manutenção geral" }
                }

            }
        }
    }


}


export default documentacao 