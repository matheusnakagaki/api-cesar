// 1. Importar o Express
const express = require('express');
const cors = require('cors'); // Importar o CORS

// 2. Importar o arquivo de rotas
const cifraRoutes = require('./cifra-rotas.js');
  
// 3. Criar a aplicação 
const app = express();

// 4. Ensinar o Express a ler o JSON que será enviado no "body"
app.use(express.json());

// 5. Habilitar o CORS para todas as requisições
app.use(cors()); 

// 6. Usar as rotas importadas (API)
app.use(cifraRoutes);

// 7. Definir a "porta" onde o servidor vai funcionar
const PORT = 3000; 

// 8. Iniciar o servidor
app.listen(PORT, () => {
  // Apenas esta linha muda
  console.log(`API da Cifra de César rodando!`);
  console.log(`Acesse em http://localhost:${PORT}`);
});