function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

if (imagem.classList.contains('dashboard__item__img--rented')) {
    imagem.classList.remove('dashboard__item__img--rented');
    botao.classList.remove('dashboard__item__button--return');
    botao.textContent = 'Alugar';
    
//No projeto Alugames, uma confirmação ao devolver um jogo,
// solicitando ao usuário que confirme a devolução antes que ela seja concluída.
// Isso pode ajudar a evitar devoluções acidentais
    let confirmação = prompt('Deseja devolver o jogo? SIM - digite 1; Não - digite qualquer outro número')
    if(confirmação == 1)
        {
        alert('Devolução Concluída');
        }
        else if(confirmação <0 || confirmação == 0 || confirmação > 1)
        {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        }
}
else
    {
    imagem.classList.add('dashboard__item__img--rented');
    botao.classList.add('dashboard__item__button--return');
    botao.textContent = 'Devolver';
    }
}