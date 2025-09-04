# Atividade 5: Consumo de API com ReactJS

## Visão Geral do Projeto

Este projeto visa a criação de uma aplicação web em ReactJS que interage com uma API de filmes (TMDB ou OMDb). O objetivo principal é permitir que os usuários busquem filmes, visualizem informações detalhadas sobre eles e gerenciem uma lista de favoritos, utilizando o armazenamento local (`localStorage`) para persistir os dados.

---

## Funcionalidades Obrigatórias

O projeto deve implementar as seguintes funcionalidades principais:

### 1. Página de Busca
- **Campo de Texto:** Um campo de entrada para o usuário digitar o termo de pesquisa.  
- **Exibição de Resultados:** Uma lista de filmes que corresponda ao termo de busca, mostrando o pôster, o título e o ano de lançamento. Cada item da lista deve ter um botão para ver mais detalhes.

### 2. Paginação
- Navegação por páginas de resultados, permitindo que o usuário avance e retroceda para explorar mais filmes.

### 3. Página de Detalhes
- Ao clicar em um filme na lista de busca, o usuário deve ser direcionado para uma nova página.  
- Esta página deve exibir informações completas sobre o filme, como diretor, elenco, sinopse e avaliação.

### 4. Lista de Favoritos
- Um botão deve ser visível em cada card de filme para permitir que o usuário adicione ou remova o filme da sua lista de favoritos.  
- Os filmes favoritados devem ser persistidos no `localStorage` do navegador para que não se percam ao recarregar a página.

### 5. Tratamento de Erros e Carregamento
- Uma mensagem de "carregando" deve ser exibida enquanto a aplicação aguarda a resposta da API.  
- Mensagens de erro claras devem ser mostradas ao usuário caso a busca falhe ou a API retorne algum problema.

---

## Detalhes Adicionais

Este projeto é uma prática para consolidar o aprendizado em consumo de API. Para que ele funcione corretamente, siga as instruções abaixo:

### Instalações Necessárias

Para configurar o projeto, você precisará instalar todas as dependências. No terminal, navegue até a pasta do projeto e execute:

```bash

npm install

Este comando irá instalar todas as bibliotecas necessárias, incluindo o react-router-dom, que é fundamental para gerenciar as rotas da sua aplicação (por exemplo, ir da página de busca para a de detalhes).

## Uso da API e Chave de Acesso (API Key)

Para consumir a API do TMDB, é necessário obter uma chave de acesso (API Key).

1. **Crie uma Conta:** Acesse o site do [The Movie Database (TMDB)](https://www.themoviedb.org/) e crie uma conta.
2. **Obtenha a Chave:** Vá para as configurações do seu perfil, procure a seção de "API" e solicite uma chave.
3. **Inclua no Código:** A sua chave de acesso deve ser incluída nas requisições para a API. Geralmente, ela é adicionada como um parâmetro de consulta na URL.  
   É recomendado armazená-la em uma variável de ambiente para maior segurança.

### Exemplo de uso em JavaScript:

const API_KEY = "SUA_CHAVE_AQUI";
const BASE_URL = "https://api.themoviedb.org/3";

const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=Matrix`;
