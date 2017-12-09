$(document).ready(function() {
    $('.head-first-line__menu-small').click(function() {
         ($('.head-first-line__menu').css('display') == 'none') ? $('.head-first-line__menu').css('display', 'block') : $('.head-first-line__menu').css('display', 'none');
    });
});