# Supermarket List API

Esta API foi criada para ajudar usuários a organizarem sua lista 
de compras e evitar o esquecimento de itens no supermercado.


### Tecnologias Utilizadas

- Node.js
- Express 
- Mongoose 
- MongoDB
- Nodemon 

### Tecnologias Obrigatória

- Node.js instalado (https://nodejs.org)
- Instância do MongoDB em execução:
  Exemplo usando Docker:

```
docker run --name supermarket-list -p 27017:27017 -d mongo
```
### Etapas para executar o projeto

#### 1. Clone o repositório:

```
git clone https://github.com/damasa200/supermarket-list-api
```

#### 2. Navegue até o repositório:

```
cd supermarket-list-api
```

#### 3. Instale as dependências:

```
npm intall 
``` 

#### 4. Execute a API:

```
npm run start:dev
```


## Terminais disponíveis:

[GET]/list_items
[POST]/liste_items
[DELETE]/list_items/:id
[PUT]/list_items/:id







