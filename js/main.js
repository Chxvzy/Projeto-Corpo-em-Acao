// Carrossel de vídeos (Siema): 2 por vez no desktop, 1 no celular.
if (typeof Siema !== 'undefined' && document.querySelector('.siema')) {
    const slider = new Siema({
        perPage: { 0: 1, 901: 2 },
        loop: true,
        duration: 500
    })

    const buttonPrev = document.querySelector('.prev')
    const buttonNext = document.querySelector('.next')

    // Com loop ativo o Siema já volta ao fim / ao começo sozinho.
    if (buttonPrev) buttonPrev.addEventListener('click', () => slider.prev())
    if (buttonNext) buttonNext.addEventListener('click', () => slider.next())
}

// Botão "Jogo": quem ainda não entrou passa por login/cadastro;
// quem já fez login (sessionStorage "user", gravado por login.js) vai direto ao quiz.
const botaoJogo = document.querySelector('#jogo')
if (botaoJogo) {
    let logado = false
    try { logado = Boolean(sessionStorage.getItem('user')) } catch (erro) { logado = false }
    botaoJogo.setAttribute('href', logado ? './pages/inicio.html' : './pages/login.html')
}