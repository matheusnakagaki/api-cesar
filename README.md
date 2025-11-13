Matheus Nakagaki Gouveia e João Vitor de Campos Ferrari

API para Cifra de César - Segurança da Informação

Este projeto é uma API RESTful desenvolvida em Node.js e Express. A API implementa a Cifra de César, uma técnica de substituição monoalfabética baseada em um deslocamento numérico.

A API expõe endpoints para cifrar, decifrar, e um endpoint de força bruta inteligente que identifica a decifração mais provável em português.

Instruções de Execução

Para executar o projeto localmente, siga os passos abaixo:

Instalar as dependências:
Abra um terminal na pasta raiz do projeto e execute o comando:

npm install

Instalar o cors com o comando:

npm install cors

Iniciar o servidor:
Após a instalação, inicie o servidor com o seguinte comando:

node index.js

O servidor estará rodando e pronto para receber requisições em: http://localhost:3000

Testando a API

Após iniciar o servidor, recomendamos usar um cliente de API (como o Thunder Client no VS Code ou o Postman) para testar os endpoints.

Endpoints da API

A API possui três endpoints, conforme especificado na atividade.

1. Cifrar Mensagem

Converte um texto claro em seu equivalente cifrado.

URL: http://localhost:3000/cifrar

Método: POST

Body (JSON):

{
  "textoClaro": "ate amanha",
  "deslocamento": "3"
}


Resposta de Sucesso (200 OK):

{
  "textoCifrado": "dwh dpdqkd"
}


2. Decifrar Mensagem

Converte um texto cifrado de volta ao seu texto claro original.

URL: http://localhost:3000/decifrar

Método: POST

Body (JSON):

{
  "textoCifrado": "dwh dpdqkd",
  "deslocamento": "3"
}


Resposta de Sucesso (200 OK):

{
  "textoClaro": "ate amanha"
}


3. Decifrar por Força Bruta (Inteligente)

Testa todas as 25 chaves e retorna a decifração com a maior probabilidade de estar em português.

URL: http://localhost:3000/decifrarForcaBruta

Método: POST

Body (JSON):

{
  "textoCifrado": "dwh dpdqkd"
}


Resposta de Sucesso (200 OK):
(O resultado é a string única mais provável)

{
  "textoClaro": "ate amanha"
}