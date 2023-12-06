// Seu código aqui.

// exercicio 01
// script.js

// Função para alterar o texto da tag <p>
function alterarTexto() {
  // Seleciona a segunda tag <p> dentro da classe "center-content"
  const paragrafo = document.querySelector('.center-content p:nth-child(2)');

  // Verifica se o elemento foi encontrado
  if (paragrafo) {
    // Muda o texto dentro da tag <p>
    paragrafo.innerHTML = 'Me vejo trabalhando como full stack.';
  } else {
    console.error('Elemento não encontrado.');
  }
}

// Chama a função quando a página é carregada
window.onload = alterarTexto;
