function alterarStatus(id)
{
let gameClicado = document.getElementById(`game-${id}`);
let imagem = gameClicado.querySelector('.dashboard__items__item');
let botao = gameClicado.querySelector('.dashboard__item__button');
let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
alert(nomeJogo.textContent);
}

