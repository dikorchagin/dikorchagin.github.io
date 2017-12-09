$(document).ready(function() {
    var tmp = '360px';
    
    $('.newsblock-small__key').click(function() {
        if ($(this).nextAll('.newsblock-small__text-full').css('display') == 'none') {
            tmp = $(this).offsetParent().css('max-width');
            $(this).offsetParent().css('max-width', '100%');            
            $(this).nextAll('.newsblock-small__text-small').css('display', 'none');
            $(this).nextAll('.newsblock-small__text-full').css('display', 'inline-block');
            $(this).text('-');
        } else {
            $(this).offsetParent().css('max-width', tmp);            
            $(this).nextAll('.newsblock-small__text-small').css('display', 'inline-block');
            $(this).nextAll('.newsblock-small__text-full').css('display', 'none');
            $(this).text('+');
        }
    });
    
});