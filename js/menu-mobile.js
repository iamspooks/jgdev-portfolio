$(function(){
    $list_mobile_menu = $('nav.mobile ul');
    $menu_mobile_open = $('.btn-open');
    $menu_mobile_closed = $('.btn-closed');

    $menu_mobile_open.click(function() {
        $list_mobile_menu.slideToggle(300);
        $menu_mobile_open.hide();
        $menu_mobile_closed.show();
        $('.inicio').animate({marginTop: '252px'}, 300);
    });

    $menu_mobile_closed.click(function() {
        $list_mobile_menu.slideToggle(300);
        $menu_mobile_closed.hide();
        $menu_mobile_open.show();
        $('.inicio').animate({marginTop: '0px'}, 280);
    });
});