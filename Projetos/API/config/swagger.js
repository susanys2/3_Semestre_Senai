
const documentacao = {
    openapi: '3.0.3',
    info: {
        title: 'API de Produtos',
        description: 'Documentação da API de gerenciamento financeiro - FinanControl',
        version: '1.0.0'
    },
    servers: [
        { url: 'http://localhost:3000', description: 'localhost' }
    ],
    tags: [
        { name: 'Usuários', description: 'Operações relacionadas aos usuários' },
        { name: 'Categorias', description: 'Operações relacionadas as categorias' },
        { name: 'Transações', description: 'Operações relacionadas a transacoes' },
    ],
    paths: {
        "/usuarios": {
            get: {
                tags: ["Usuários"],
                summary: "Listar todos os usuários",
                security:[
                    {bearerAuth: []}
                ],
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso!",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: '#/components/schemas/Listar_Usuarios' }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ['Usuários'],
                summary: 'Cadastrar novo usuário',
                description: "Recebe nome, email, senha para cadastrar novo usuário",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastrar_Usuario"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Usuário cadastrado com sucesso!"
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
                summary: 'Atualizar todos os dados do usuário',
                description: 'Atualiza todos os dados de um usuário existente, é necessário enviar todos os campos',
                parameters: [
                    {
                        name: "id_usuario",
                        in: "path",
                        required: true,
                        description: "ID do usuário a ser atualizado",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizar_Usuario" },
                            example: {
                                email: "ricardo5@sesisp.com",
                                senha: "senhaAtualizada",
                                nome: "Ricardo",
                                tipo_acesso: "Administrador",
                                ativo: true
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Usuário atualizado com sucesso!"
                    },
                    404: {
                        description: "Usuário não encontrado",
                        content: {
                            "application/json": {
                                example: { message: "Usuário não encontrado" }
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }

                }

            },
            delete: {
                tags: ['Usuários'],
                summary: 'Remover Usuário',
                description: 'Remove usuário existente pelo ID',
                parameters: [
                    {
                        name: "id_usuario",
                        in: "path",
                        required: true,
                        description: "ID do usuário a ser removido",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "Usuário removido com sucesso!"
                    },
                    404: {
                        description: "Usuário não encontrado",
                        content: {
                            "application/json": {
                                example: { message: "Usuário não encontrado" }
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }

                }
            },

        },
        "/login": {
            post: {
                tags: ['Autenticação'],
                summary: 'Realizar Login',
                description: "Autentica um usuario e retorna id e nome",
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
                    200: {
                        description: "Login realizado com sucesso!",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Resposta_Login"
                                }
                            }
                        }
                    },
                    400: { description: "Email e senha são obrigatorios" },
                    401: { description: "Credenciais inválidas" },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },
        "/categorias": {
            get: {
                tags: ["Categorias"],
                summary: "Listar todos as categorias",
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso!",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: '#/components/schemas/Listar_Categorias' }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ['Categorias'],
                summary: 'Cadastrar nova categoria',
                description: "Recebe nome, descricao, cor, icone, tipo, ativo para cadastrar nova categoria",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastrar_Categoria"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Categoria cadastrada com sucesso!"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },
        "/categorias/{id_categoria}": {
            put: {
                tags: ['Categorias'],
                summary: 'Atualizar todos os dados de categorias',
                description: 'Atualiza todos os dados de uma categoria existente, é necessário enviar todos os campos',
                parameters: [
                    {
                        name: "id_categoria",
                        in: "path",
                        required: true,
                        description: "ID da categoria a ser atualizado",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizar_Categoria" },
                            example: {
                                nome: "Área",
                                descricao: "areazinha",
                                cor: "rgb(255, 255, 0)",
                                icone: "area",
                                tipo: "2",
                                ativo: true
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Categoria atualizada com sucesso!"
                    },
                    404: {
                        description: "Categoria não encontrada",
                        content: {
                            "application/json": {
                                example: { message: "Categoria não encontrada" }
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }

                }

            },
            delete: {
                tags: ['Categorias'],
                summary: 'Remover Categoria',
                description: 'Remove categoria existente pelo ID',
                parameters: [
                    {
                        name: "id_categoria",
                        in: "path",
                        required: true,
                        description: "ID da categoria a ser removido",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "Categoria removida com sucesso!"
                    },
                    404: {
                        description: "Categoria não encontrada",
                        content: {
                            "application/json": {
                                example: { message: "Categoria não encontrada" }
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }

                }
            },

        },
        "/subcategorias": {
            get: {
                tags: ["Subcategorias"],
                summary: "Listar todas as subcategorias",
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso!",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: '#/components/schemas/Listar_Subcategorias' }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ['Subcategorias'],
                summary: 'Cadastrar nova subcategoria',
                description: "Recebe nome, ativo, id_categoria para cadastrar nova subcategoria",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastrar_Subcategoria"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Subcategoria cadastrada com sucesso!"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },
        "/subcategorias/{id_subcategoria}": {
            put: {
                tags: ['Subcategorias'],
                summary: 'Atualizar todos os dados de subcategorias',
                description: 'Atualiza todos os dados de uma subcategoria existente, é necessário enviar todos os campos',
                parameters: [
                    {
                        name: "id_subcategoria",
                        in: "path",
                        required: true,
                        description: "ID da subcategoria a ser atualizada",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizar_Subcategoria" },
                            example: {
                                nome: "Subcategoria",
                                ativo: true,
                                id_categoria: 1,
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Subcategoria atualizada com sucesso!"
                    },
                    404: {
                        description: "Subcategoria não encontrada",
                        content: {
                            "application/json": {
                                example: { message: "Subcategoria não encontrada" }
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }

                }

            },
            delete: {
                tags: ['Subcategorias'],
                summary: 'Remover Subcategorias',
                description: 'Remove subcategoria existente pelo ID',
                parameters: [
                    {
                        name: "id_subcategoria",
                        in: "path",
                        required: true,
                        description: "ID da subcategoria a ser removida",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "Subcategoria removida com sucesso!"
                    },
                    404: {
                        description: "Subcategoria não encontrada",
                        content: {
                            "application/json": {
                                example: { message: "Subcategoria não encontrado" }
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }

                }
            },

        },
        "/transacoes": {
            get: {
                tags: ["Transações"],
                summary: "Listar todos as transações",
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso!",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: '#/components/schemas/Listar_Transacoes' }
                                }
                            }
                        }
                    }
                }
            },
        },
        "/transacoes/tipo/{tipo}": {
            get: {
                tags: ["Transações"],
                summary: "Listar todos as transações",
                parameters: [
                    {
                    name: 'tipo',
                    in: 'path',
                    required: true,
                    description: "tipo transação(E = Entrada / S = Saída)",
                    schema:{type: "string", enum:["E","S"], example: "S"}

                    }
                ],
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso!",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: '#/components/schemas/Listar_Transacoes' }
                                }
                            }
                        }
                    }
                }
            },
        },
        "/transacoes/periodo":{
            get: {
                tags: ["Transações"],
                summary: "Listar transações por periodo",
                parameters:[
                    {
                        name: "inicio",
                        in: "query",
                        required: true,
                        description: "Data de inicio do período",
                        schema: {type: "string", example: "10/04/2026"}
                    },
                    {
                        name: "fim",
                        in: "query",
                        required: true,
                        description: "Data de fim do período",
                        schema: {type: "string", example: "13/04/2026"}
                    }
                ],
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso!",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: '#/components/schemas/Listar_Transacoes' }
                                }
                            }
                        }
                    }
                }
            },
        }
},
    components: {
        securitySchemes:{
            bearerAuth:{
                type: 'http',
                scheme:'bearer',
                bearerFormat: 'JWT',
                description: 'Insira o Token obtido no LOGIN'
            }
        },
        schemas: {
            Listar_Usuarios: {
                type: 'object',
                properties: {
                    id: { type: "integer", example: 1 },
                    email: { type: "string", example: "ricardo@email.com" },
                    senha: { type: "string", example: "123" },
                    nome: { type: "string", example: "Ricardo" },
                    tipo_acesso: { type: "string", example: "Usuário" },
                    ativo: { type: "boolean", example: false }
                }
            },
            Cadastrar_Usuario: {
                type: 'object',
                properties: {
                    id: { type: "integer", example: 1 },
                    email: { type: "string", example: "ricardo@email.com" },
                    senha: { type: "string", example: "123" },
                    nome: { type: "string", example: "Ricardo" },
                    tipo_acesso: { type: "string", example: "Usuário" },
                    ativo: { type: "boolean", example: false }
                }
            },
            Atualizar_Usuario: {
                type: 'object',
                required: ["email", "senha", "nome", "tipo_acesso", "ativo"],
                properties: {
                    id: { type: "integer", example: 1 },
                    email: { type: "string", example: "ricardo@email.com" },
                    senha: { type: "string", example: "123" },
                    nome: { type: "string", example: "Ricardo" },
                    tipo_acesso: { type: "string", example: "Usuário" },
                    ativo: { type: "boolean", example: false }
                }
            },
            Login_Usuario: {
                type: 'object',
                required: true,
                properties: {
                    email: { type: "string", example: "ricardo@email.com" },
                    senha: { type: "string", example: "123" },
                }
            },
            Resposta_Login: {
                type: 'object',
                properties: {
                    message: { type: 'string', example: 'Login realizado com sucesso' },
                    token:{
                        type: 'string',
                        description: 'Token JWT gerado',
                        example: 'eyjlahjgkdjdffn...'
                    },
                    usuario: {
                        type: 'object',
                        properties: {
                            id_usuario: { type: "string", example: '1' },
                            nome: { type: "string", example: "Ricardo" },
                        }
                    }
                }
            },
            Listar_Categorias: {
                type: 'object',
                properties: {
                    id_categoria: { type: "integer", example: 1 },
                    nome: { type: "string", example: "Saúde" },
                    descricao: { type: "string", example: "Produtos para a Saúde" },
                    cor: { type: "string", example: "#fff" },
                    icone: { type: "string", example: "nomeIcone" },
                    tipo: { type: "string", example: 'E' },
                }
            },
            Cadastrar_Categoria: {
                type: 'object',
                properties: {
                    id: { type: "integer", example: 1 },
                    nome: { type: "string", example: "Lazer" },
                    descricao: { type: "string", example: "Momento de lazer" },
                    cor: { type: "string", example: "#0dfd00c6" },
                    icone: { type: "string", example: "Lazer" },
                    ativo: { type: "boolean", example: false }
                }

            },
            Atualizar_Categoria: {
                type: 'object',
                required: ["email", "senha", "nome", "tipo_acesso", "ativo"],
                properties: {
                    id: { type: "integer", example: 1 },
                    nome: { type: "string", example: "Area de churrasco" },
                    descricao: { type: "string", example: "area para fazer churrasco" },
                    cor: { type: "string", example: "#cf980cd6" },
                    icone: { type: "string", example: "churrasco" },
                    tipo: { type: "string", example: "2" },
                    ativo: { type: "boolean", example: true }
                }
            },
            Listar_Subcategorias: {
                type: 'object',
                properties: {
                    nome: { type: "string", example: "Sub do lazer" },
                    ativo: { type: "boolean", example: true },
                    id_categoria: { type: "integer", example: 2 },
                }
            },
            Cadastrar_Subcategoria: {
                type: 'object',
                properties: {
                    nome: { type: "string", example: "Sub do lazer" },
                    ativo: { type: "boolean", example: true },
                    id_categoria: { type: "integer", example: 2 },
                }
            },
            Atualizar_Subcategoria: {
                type: 'object',
                required: ["email", "senha", "nome", "tipo_acesso", "ativo"],
                properties: {
                    id: { type: "integer", example: 1 },
                    nome: { type: "string", example: "Subcategoria" },
                    ativo: { type: "boolean", example: true },
                    id_categoria: { type: "integer", example: 2 },

                }
            },
            Listar_Transacoes: {
                type: 'object',
                properties: {
                    id_transacao: { type: "integer", example: 1 },
                    valor: { type: "number", example: 10.00 },
                    descricao: { type: "string", example: "Consulta Médica" },
                    data_registro: { type: "string", example: "09/04/2026" },
                    dat_pagamento: { type: "string", example: "09/04/2026" },
                    data_vencimento: { type: "string", example: "10/04/2026" },
                    tipo: { type: "string",enum:["E", "S"], example: "E" },
                    nome_categoria: { type: "string", example: "Saúde" },
                    nome_subcategoria: { type: "string", example: "Consulta Médica" },
                }
            },
        }
    }
    }

export default documentacao


