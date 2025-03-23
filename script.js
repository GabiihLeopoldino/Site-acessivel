document.addEventListener('DOMContentLoaded', function(){
    const botãoDeAcessibilidade = document.getElementById('botão-acessibilidade')
    const opçõesDeAcessibilidade = document.getElementById('opções-acessibilidade')

    botãoDeAcessibilidade.addEventListener('click' , function(){
        botãoDeAcessibilidade.classList.toggle('rotação-botão');
        opçõesDeAcessibilidade.classList.toggle('apresenta-lista')
    })

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;
    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;

    });

    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;

    });

});