const PARAGRAFO_EX1 = '.main-content .center-content p:nth-child(2)';
const QUADRADO_AMARELO = '.main-content';
const QUADRADO_VERMELHO = '.center-content';
const TITULO = 'h1.title';
const PARAGRAFO_EX5 = '.main-content .center-content p:nth-child(1)';
const PARAGRAFO_EX6 = 'footer p';

before(() => {
  cy.configureLayoutInspector({
    excludePadding: true,
    threshold: 5,
  });
});

describe('Desafio Técnico: manipulação de DOM', () => {
  beforeEach(() => {
    cy.visit('./index.html');
  });

  describe('Exercício 1 - Alterando o texto', () => {
    it('O texto do parágrafo não pode ser -----', () => {
      cy.get(PARAGRAFO_EX1).should('not.have.text', '-----');
    });
  });

  describe('Exercício 2 - Alterando a cor - quadrado amarelo', () => {
    it('A nova cor do quadrado amarelo deve ser rgb(76, 164, 109)', () => {
      cy.get(QUADRADO_AMARELO).should('have.css', 'background-color', 'rgb(76, 164, 109)');
    });
  });

  describe('Exercício 3 - Alterando a cor - quadrado vermelho', () => {
    it('A nova cor do quadrado vermelho deve ser branca', () => {
      cy.get(QUADRADO_VERMELHO).should('have.css', 'background-color', 'rgb(255, 255, 255)');
    });
  });

  describe('Exercício 4 - Corrigindo o título', () => {
    it('O título existe', () => {
      cy.get(TITULO).should('exist');
    });

    it('O texto do título deve estar corrigido', () => {
      cy.get(TITULO).should('have.text', 'Desafio - JavaScript');
    });
  });

  describe('Exercício 5 - Letras maiúsculas', () => {
    it('O texto do parágrafo deve estar em letras maiúsculas', () => {
      cy.get(PARAGRAFO_EX5).should('have.text', 'TEXTO PADRÃO DO NOSSO SITE');
    });
  });

  describe('Exercício 6 - Exibindo tags', () => {
    it('O parágrafo do rodapé deve conter os conteúdos das tags p', () => {
      cy.get(PARAGRAFO_EX6).contains(/TEXTO PADRÃO DO NOSSO SITE .+ Trybe/);
    });
  });
});
