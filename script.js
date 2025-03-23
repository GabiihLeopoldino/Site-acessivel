document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotão = document.getElementById ('aumentar-fonte') ;

    let tamanhoAtualFonte = 1;

    aumentaFonteBotão.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;    
        document.body.style.fontSize = '${tamanhoAtualFonte}rem'
    })


})