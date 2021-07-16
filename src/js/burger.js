$(document).ready(function() {
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
$(window).scroll(function(){
    if ( $(this).scrollTop() > 35 ) {
        $('header').addClass('scrolled');
    } else {
        $('header').removeClass('scrolled');
    }
})