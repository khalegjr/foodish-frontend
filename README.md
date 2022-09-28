<p align="center"><img src="./src/assets/img/Logo.svg" width="400" alt="Logo Foodish"></p>

## Sobre o projeto

Frontend do projeto teste da [JOTACOM](https://www.jotacom.com/). Construído com React 18 e React-Bootstrap.

## Instalação

Para rodar o frontend clone o repositório em um diretório de sua preferência.

```bash
git clone https://github.com/khalegjr/foodish-frontend

cd foodish-frontend
```

Renomeie ou copie o arquivo <code>.env.example</code> para <code>.env</code>. Altere as varáveis de ambiente no arquivo .env conforme a necessidade.

A seguinte variável deve ser setada conforme o backend:
<strong>REACT_APP_BACKAPI</strong>: endereço do serviço de backend.

### Executando com Docker

Se pretende utilizar em ambiente docker, após atualizar as variáveis de ambiente, execute o seguinte comando para executar em mode daemon:

```bash
docker compose up -d
```

### Preparando o ambiente

Instale as dependências

```bash
npm install
```

```bash
./vendor/bin/sail composer install
```

Suba o servidor:

```bash
npm start
```

## Considerações

O frontend levou muito mais tempo para fazer, porque ainda sou iniciante no React e, principalmente, não utilizava Bootstrap e seus componentes desde 2014.

Assim, ficaram algumas inconsistências de layout e ainda faltou componentizar no nível que gostaria.

Conhecendo um pouco mais do ecossistema do React, se tivesse tempo, usaria a lib <strong>react-hook-form</strong> para gerenciar para gerenciar os estados do formulário.
