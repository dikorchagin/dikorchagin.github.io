$(document).ready(function() {
    $('.head-first-line__menu-small').click(function() {
         ($('.head-first-line__menu').css('display') == 'none') ? $('.head-first-line__menu').slideDown(1000) : $('.head-first-line__menu').slideUp(1000);
    });
});