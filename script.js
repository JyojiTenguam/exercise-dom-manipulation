// Seu código aqui.

// exercicio 01

// Função para alterar o texto da tag <p>
const texto = 'Me vejo trabalhando como full stack.';
document.querySelector('.center-content p:nth-child(2)').innerText = texto;

// exercicio 02
document.querySelector('.main-content').style.backgroundColor = 'rgb(76, 164, 109)';

// exercicio 03
document.querySelector('.center-content').style.backgroundColor = 'white';

// exercicio 04
document.querySelector('.title').innerText = 'Desafio - JavaScript';

// exercicio 05
document.querySelector('.center-content p:nth-child(1)').innerText = 'TEXTO PADRÃO DO NOSSO SITE';

// exercicio 06
const section = document.querySelectorAll('section p');
const footer = `${section[0].innerText} ${section[1].innerText} ${section[2].innerText}`;
document.querySelectorAll('footer p')[0].innerHTML = footer;
