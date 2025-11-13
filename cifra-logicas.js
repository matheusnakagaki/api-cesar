const alfabeto = 'abcdefghijklmnopqrstuvwxyz';

const DICIONARIO = new Set([
  'de', 'a', 'o', 'que', 'e', 'do', 'da', 'em', 'um', 'para', 'com', 'nao', 
  'uma', 'os', 'na', 'se', 'por', 'mais', 'como', 'mas', 'foi', 'ao', 'ele', 
  'das', 'tem', 'seu', 'sua', 'eu', 'muito', 'ja', 'quando', 'ha', 'nos', 
  'quem', 'pelo', 'pela', 'so', 'tambem', 'ela', 'me', 'aos', 'ou', 'ser', 
  'sobre', 'depois', 'ainda', 'sem', 'mesmo', 'onde', 'ate', 'entre', 
  'assim', 'mesma', 'outros', 'grande', 'anos', 'dia', 'vez', 'seja', 
  'sao', 'agora', 'este', 'esta', 'sempre', 'tudo', 'essa', 'esse', 
  'dentro', 'hoje', 'ano', 'tempo', 'vida', 'parte', 'forma', 'enquanto', 
  'casa', 'meu', 'antes', 'dois', 'tres', 'todo', 'toda', 'outra', 'outro', 
  'coisa', 'muita', 'deve', 'bom', 'bem', 'nada', 'apenas', 'pais', 'qual', 
  'disse', 'mundo', 'ola', 'pode'
]);

/**
 * Conta quantas palavras de um texto existem no nosso dicionário
 * @param {string} texto - O texto a ser verificado
 * @returns {number} - Número de palavras encontradas
 */

function contarPalavrasPortuguesas(texto) {
  // 1. Limpa o texto (tira vírgulas, etc.) e o quebra em palavras
  const palavras = texto.toLowerCase().replace(/[^a-z\s]/g, '').split(' ');
  
  let qtdPalavras = 0;
  
  // 2. Verifica cada palavra contra o dicionário
  for (const palavra of palavras) {
    if (DICIONARIO.has(palavra)) {
      qtdPalavras++;
    }
  }
  return qtdPalavras;
}

// --- Funções de Cifra ---

function girarLetra(char, deslocamento, modo) {
  const charMinusculo = char.toLowerCase();
  const indice = alfabeto.indexOf(charMinusculo);
  if (indice === -1) {
    return char;
  }
  let novoIndice;
  if (modo === 'cifrar') {
    novoIndice = (indice + deslocamento) % 26;
  } else if (modo === 'decifrar') {
    novoIndice = (indice - deslocamento + 26) % 26;
  }
  let novaLetra = alfabeto[novoIndice];
  if (char === char.toUpperCase() && char !== charMinusculo) {
    novaLetra = novaLetra.toUpperCase();
  }
  return novaLetra;
}

function cifrar(textoClaro, deslocamento) {
  return textoClaro
    .split('')
    .map(char => girarLetra(char, deslocamento, 'cifrar'))
    .join('');
}

function decifrar(textoCifrado, deslocamento) {
  return textoCifrado
    .split('')
    .map(char => girarLetra(char, deslocamento, 'decifrar'))
    .join('');
}

// Quebrar Força Bruta
function quebrarForcaBruta(textoCifrado) {
  let melhorDecifracao = '';
  let maiorPontuacao = -1;
  let melhorChave = 0;

  // 1. Testa todas as 25 chaves
  for (let i = 1; i <= 25; i++) {
    const textoDecifrado = decifrar(textoCifrado, i);
    
    // 2. Pontua a decifração
    const pontuacao = contarPalavrasPortuguesas(textoDecifrado);

    // 3. Verifica se esta é a melhor decifração que encontramos até agora
    if (pontuacao > maiorPontuacao) {
      maiorPontuacao = pontuacao;
      melhorDecifracao = textoDecifrado;
      melhorChave = i;
    }
  }

  // 4. Retorna APENAS a melhor decifração, 
    
  // Se nenhuma palavra for encontrada (pontuação 0), avisamos.
  if (maiorPontuacao === 0) {
    return `Nenhuma correspondência em português encontrada. A tentativa mais provável (chave ${melhorChave}) é: ${melhorDecifracao}`;
  }
  
  return melhorDecifracao;
}

// Exporta as funções
module.exports = {
  cifrar,
  decifrar,
  quebrarForcaBruta
};