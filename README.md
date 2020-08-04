## Requisitos para rodar o projeto

O projeto foi feito utilizando o framework React.
É um requisito para rodar o projeto ter o Node.js instalado localmente.
Também é necessário ter o node package manager, NPM, pra baixar as dependências do projeto.

pode ser baiaxado aqui: [https://nodejs.org/en/]

### Baixando as dependências

Para rodar o projeto localmente você precisa instalar os pacotes npm que são dependências do mesmo.

para isso, navegue até a pasta raiz do projeto através do seu terminal ou cmd, no windows, e em seguida digite o comando abaixo:

<code>npm install</code>

Pronto, você já possui todos as bibliotécas necessárias para rodar o projeto.

### Rodando versão de desenvolvimento

Para rodar a versão de desenvolvimento acesse a pasta raiz através de um terminal ou cmd, no windows, e digite o seguinte comando:

<code>npm start</code>

### Rodando versão de produção

Para rodar a versão de produção em um servidor local, no terminal, digite os seguintes comandos:

Primeiro é necessário criar a build do projeto com o seguinte comado:

<code>npm run build</code>

Agora precisamos instalar <i>serve</i>,caso você não o tenha, esse pacote não está incluso nas dependências do projeto pois ele é opcional, existem outras formas de fazer essa tarefa.

Mas caso você não o tenha ainda, digite o comando abaixo no seu terminal:

<code>npm install -g serve</code>

Pronto, agora é só rodar o projeto localmente através do comando abaixo:

<code>serve -s build</code>

### Teste

para testar a aplicação, na pasta raiz, no terminal, rode o comando:

<code>npm run test</code>

### Acesse deploy do projeto

O resultado final do projeto pode ser acessado atavés da seguinte url:

[https://under-front.web.app/]
