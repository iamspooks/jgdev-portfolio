$(function(){
    $('nav.mobile').click(function(){
        var listaMenu = $('nav.mobile ul');
        if(listaMenu.is(':hidden') == true){
            var icone = $('.mobile-btn').find('i');
            icone.removeClass('fa-solid fa-bars');
            icone.addClass('fa-solid fa-times');
            listaMenu.slideToggle();
        }
        else{
            var icone = $('.mobile-btn').find('i');
            icone.removeClass('fa-solid fa-times');
            icone.addClass('fa-solid fa-bars');
            listaMenu.slideToggle();
        }        
    });

    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        let target = this.hash;
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });
})