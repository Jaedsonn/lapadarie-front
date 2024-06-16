<h1 align="center" style="font-weight: bold;">Lapadarie</h1>

<p align="center">
 <a href="#tech">Technologies</a> • 
 <a href="#started">Getting Started</a> • 
  <a href="#routes">API Endpoints</a> •
 <a href="#colab">Collaborators</a> •
 <a href="#contribute">Contribute</a>
</p>

<p align="center">
    <b>Projeto de gestão de padaria desenvolvida durante o núcleo-web da empresa de informática Júnir-InfoJr da UFBA. Tem como intuito disponibilizar funcionalidades que facilitem a gestão de comercial, tais como: total de vendas, clientes em fila, total de pães vendidos e etc.</b>
</p>

<h2 id="technologies">Tecnologias</h2>

![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

<h2 id="started">Vamos rodar o projeto?</h2>

<h3>Prerequisitos</h3>

- [NodeJS](https://github.com/)
- [Git 2](https://github.com)

<h3>Cloning</h3>

How to clone your project

```bash
git clone https://github.com/Jaedsonn/lapadarie-back.git
```

<h3>Starting</h3>

```bash
cd project-name
npm i
mkdir .env
npx prisma migrate dev

//DENTRO DO ARQUIVO .env DEFINIA: DATABASE_URL="link do seu banco de dados"
//o banco de dados usado no projeto foi o sqlite
```


<h2 id="routes">📍 API Endpoints</h2>

​
| route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>GET /clientes</kbd>     | Retorna todos os clientes [response details](#get-clientes)
| <kbd>GET /delete/historico</kbd>     | Retorna um histórico com todos os clientes deletados [request details](#get-historico)
| <kbd>GET /estatic</kbd>     | Retorna as estátisticas da padaria [response details](#get-estatic)
| <kbd>POST /register</kbd>     | Cria um novo cliente [response details](#post-register)
| <kbd>PUT /update/:id</kbd>     | Atualiza o cliente e as estátisticas [response details](#put-client)
| <kbd>DELETE /delete/historico</kbd>     | excluí um cliente da lista e manda para o histórico [response details](#delete-client)


<h3 id="get-clientes">GET /clientes</h3>

**RESPONSE**
```json
[
    {
        "id": 27,
        "nome": "Edi",
        "paesQuant": 6,
        "precoPaes": 3
    }
]
```

<h3 id="get-historico">GET /delete/historico</h3>

**RESPONSE**
```json
[
    {
        "id": 27,
        "nome": "Edi",
        "paesQuant": 6,
        "precoPaes": 3
    }
]
```

<h3 id="get-estatic">GET /estatic</h3>

**RESPONSE**
```json
{
    "id": 1,
    "totalPaes": 43,
    "totalVendas": 21.5
}
```

<h3 id="post-register">POST /register</h3>

**REQUEST**
```json
{
	"nome": "Edi",
  "paesQuant":6
}
```
**RESPONSE**
```json
{
    "cliente": {
        "id": 27,
        "nome": "Edi",
        "paesQuant": 6,
        "precoPaes": 3 //valor do pão, por default, é 0,50
    }
}}
```

<h3 id="put-client">PUT /update/:id</h3>

**REQUEST**
```
const id: number = Number(req.params.id)
```
**RESPONSE**
```json
{
    "id": 27,
    "nome": "Edi",
    "paesQuant": 1,
    "precoPaes": 0.5
}
```

<h3 id="delete-client">DELETE /delete/:id</h3>

**REQUEST**
```
const id: number = Number(req.params.id)
```
**RESPONSE**
```json
{
    "id": 27,
    "nome": "Edi",
    "paesQuant": 1,
    "precoPaes": 0.5
}
```

<h2 id="contribute">📫 Contribute</h2>

Se você quiser contribuir com o meu projeto basta seguir os comandos abaixo☺️

1. `git clone https://github.com/Jaedsonn/lapadarie-back.git`
2. `git checkout -b feature/NAME`
3. Abra um Pull Request explicando o problema resolvido ou o recurso criado, se houver, anexe uma captura de tela das modificações visuais e aguarde a revisão!

<h3>Documentos que podem ajudar</h3>

[📝 How to create a Pull Request](https://www.atlassian.com/br/git/tutorials/making-a-pull-request)
