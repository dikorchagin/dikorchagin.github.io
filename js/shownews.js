$(document).ready(function() {
    var currentWidth = '360px';
    
    //Т.к. данные генерируются React`ом, то события надо делегировать статичным тегам.
    $('#newsReact').on( 'click', function( event ) {
        if ($(event.target).attr("class") == "newsblock-small__key") {
                if ($(event.target).nextAll('.newsblock-small__text-full').css('display') == 'none') {
                    currentWidth = $(event.target).offsetParent().css('max-width');
                    $(event.target).offsetParent().css('max-width', '100%');            
                    $(event.target).nextAll('.newsblock-small__text-small').css('display', 'none');
                    $(event.target).nextAll('.newsblock-small__text-full').css('display', 'inline-block');
                    $(event.target).text('-');
                } else {
                    $(event.target).offsetParent().css('max-width', currentWidth);            
                    $(event.target).nextAll('.newsblock-small__text-small').css('display', 'inline-block');
                    $(event.target).nextAll('.newsblock-small__text-full').css('display', 'none');
                    $(event.target).text('+');
                }
            }else{
                    if ($(event.target).attr("class") == "newsblock-small__key-window") {
                        console.log('run');
                        $(".popup-window__title").text($(event.target).prevAll('.newsblock-small__title').text());
                        $(".popup-window__content").text($(event.target).nextAll('.newsblock-small__text-full').text());
                        $(".popup-window__content").css('display', 'inline-block');
                        $(".popup-window").show(1000);
                    }
        }
    });
    
    $(".popup-window__close-key").click(function () {
         $(".popup-window").hide(1000);
    });
    
    
});