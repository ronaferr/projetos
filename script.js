window.onload = function () {

    //Mudar cores dos circulos ao recarregar
    let cores = document.getElementsByClassName('ball');
    let textoResposta = document.querySelector('#answer');
    let corPraAdvinhar = document.querySelector('#rgb-color').textContent;
    let certaResposta = 'Acertou!';
    let respostaErrada = 'Errou! Tente novamente!';
    let certa = parseInt(Math.random() * cores.length);
    let rgbCerto = `rgb${corPraAdvinhar}`;
    cores[certa].style.backgroundColor = rgbCerto;

    for (let i = 0; i < cores.length; i += 1) {
        let r = parseInt(Math.random() * 255);
        let g = parseInt(Math.random() * 255);
        let b = parseInt(Math.random() * 255);

        if(cores[i].style.backgroundColor !== rgbCerto) {
        cores[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }

        cores[i].addEventListener('click', function() {
            if (cores[i].style.backgroundColor === rgbCerto) {
                textoResposta.innerHTML = certaResposta;
            } else {
                textoResposta.innerHTML = respostaErrada;
            }
        })
    }
    
    /* conteudo pesquisado ein: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript#:~:text=Gerando%20cores%20RGBA&text=A%20fun%C3%A7%C3%A3o%20Math.,ser%C3%A1%20a%20opacidade%20da%20cor. */

    //escolendo a cor
    
}