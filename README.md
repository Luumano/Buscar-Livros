# Buscador de Livros

Este é um projeto React que permite aos usuários buscar livros utilizando a API do Algolia Hacker News. O aplicativo fornece uma interface simples onde os usuários podem inserir um termo de pesquisa e visualizar os resultados retornados pela API.

## 🚀Tecnologias Utilizadas
* React.js
* React Hooks (useState)
* Tailwind CSS (para estilização)
* React Icons (para ícones visuais)
* API do Algolia Hacker News

## 📦 Instalação e Uso
1. Clone o repositório
git clone https://github.com/luumano/buscador-de-livros.git
cd buscador-de-livros

2. Instale as dependências
````bsh
npm install
````
3. Inicie o servidor de desenvolvimento
````bsh
npm start
````
* O projeto será executado no navegador, geralmente em http://localhost:3000/.

## 🔍 Como Funciona

* 1. Digite o nome do livro ou termo de pesquisa no campo de entrada.
* 2. Clique no botão "Pesquisar".
O aplicativo enviará uma requisição GET para a API https://hn.algolia.com/api/v1/search?query=X.
Os resultados serão exibidos em uma lista contendo:
Título do livro
Autor do livro
Link para mais detalhes

## 📂 Estrutura do Projeto

📂 buscar-livros
├── 📂 src
│   ├── 📜 App.js  # Componente principal
│   ├── 📜 App.css # Estilos globais
│   ├── 📜 index.js # Ponto de entrada do React
├── 📜 package.json # Configuração do projeto
├── 📜 README.md  # Documentação do projeto

## 🔧 Melhorias Futuras

* Adicionar paginação aos resultados
* Melhorar o design da interface
* Implementar um sistema de favoritos

📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para contribuir e modificar conforme necessário.
