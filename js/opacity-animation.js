$(function(){
    // Função para verificar a posição e ajustar a opacidade
    function ajustarOpacidade() {
        var sobrePosicao = $('.sobre-mim, .sobre-skills').offset().top;
        var windowPosicao = $(window).scrollTop();
        var windowHeight = $(window).height();

        // Verifica se a seção está visível no campo de visão
        if (windowPosicao > sobrePosicao - windowHeight / 2) {
            $('.sobre-mim, .sobre-skills').addClass('mostrar');
        } else {
            $('.sobre-mim, .sobre-skills').removeClass('mostrar');
        }
    }

    // Chamando a função ao carregar a página
    ajustarOpacidade();

    // Chamando a função ao rolar a página
    $(window).scroll(function () {
        ajustarOpacidade();
    });
});