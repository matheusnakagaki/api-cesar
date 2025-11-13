// 1. Importar o Express e o Router
const express = require('express');
const router = express.Router();

// 2. Importar a nova lógica de cifragem
const { 
  cifrar, 
  decifrar, 
  quebrarForcaBruta 
} = require('./cifra-logicas.js'); 

// --- ENDPOINT PARA CIFRAR ---
router.post('/cifrar', (req, res) => {
  try {
    // 1. Pega os dados que o usuário enviou
    const { textoClaro, deslocamento } = req.body;
    
    // 2. Validação
    if (!textoClaro || deslocamento === undefined) {
      return res.status(400).json({ erro: 'O "textoClaro" e o "deslocamento" são obrigatórios.' });
    }
    
    // Converte o deslocamento para um número
    const deslocamentoNum = parseInt(deslocamento);
    if (isNaN(deslocamentoNum)) {
      return res.status(400).json({ erro: 'O "deslocamento" deve ser um número.' });
    }

    // 3. A LÓGICA DA CIFRA
    const textoCifrado = cifrar(textoClaro, deslocamentoNum);

    // 4. Devolve a resposta
    res.status(200).json({ textoCifrado: textoCifrado });

  } catch (error) {
    res.status(500).json({ erro: 'Ocorreu um erro ao processar a requisição.' });
  }
});

// --- ENDPOINT PARA DECIFRAR ---
router.post('/decifrar', (req, res) => {
  try {
    // 1. Pega os dados
    const { textoCifrado, deslocamento } = req.body;

    // 2. Validação
    if (!textoCifrado || deslocamento === undefined) {
      return res.status(400).json({ erro: 'O "textoCifrado" e o "deslocamento" são obrigatórios.' });
    }
    
    // Converte o deslocamento para um número
    const deslocamentoNum = parseInt(deslocamento);
    if (isNaN(deslocamentoNum)) {
      return res.status(400).json({ erro: 'O "deslocamento" deve ser um número.' });
    }

    // 3. A LÓGICA PARA DECIFRAR
    const textoClaro = decifrar(textoCifrado, deslocamentoNum);

    // 4. Devolve a resposta
    res.status(200).json({ textoClaro: textoClaro });

  } catch (error) {
    res.status(500).json({ erro: 'Ocorreu um erro ao processar a requisição.' });
  }
});

// --- ENDPOINT PARA FORÇA BRUTA ---
router.post('/decifrarForcaBruta', (req, res) => {
  try {
    // 1. Pega os dados
    const { textoCifrado } = req.body;

    // 2. Validação
    if (!textoCifrado) {
      return res.status(400).json({ erro: 'O "textoCifrado" é obrigatório.' });
    }

    // 3. A LÓGICA DA FORÇA BRUTA
    // A função quebraForcaBruta retorna UMA STRING SÓ com todas as 25 possibilidades
    const todasAsPossibilidades = quebrarForcaBruta(textoCifrado);

    // 4. Devolve a resposta (conforme a especificação, que espera um campo "textoClaro")
    res.status(200).json({ textoClaro: todasAsPossibilidades });

  } catch (error) {
    res.status(500).json({ erro: 'Ocorreu um erro ao processar a requisição.' });
  }
});


// Exportar o router 
module.exports = router;