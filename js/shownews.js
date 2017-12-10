$(document).ready(function() {
    var tmp = '360px';
    
    //Т.к. данные генерируются React`ом, то события надо делегировать статичным тегам.
    $('.page').on( 'click', function( event ) {
        if ($(event.target).attr("class") == "newsblock-small__key") {
                if ($(event.target).nextAll('.newsblock-small__text-full').css('display') == 'none') {
                    tmp = $(event.target).offsetParent().css('max-width');
                    $(event.target).offsetParent().css('max-width', '100%');            
                    $(event.target).nextAll('.newsblock-small__text-small').css('display', 'none');
                    $(event.target).nextAll('.newsblock-small__text-full').css('display', 'inline-block');
                    $(event.target).text('-');
                } else {
                    $(event.target).offsetParent().css('max-width', tmp);            
                    $(event.target).nextAll('.newsblock-small__text-small').css('display', 'inline-block');
                    $(event.target).nextAll('.newsblock-small__text-full').css('display', 'none');
                    $(event.target).text('+');
                }
        }
    });
    
    
});