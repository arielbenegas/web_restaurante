$('.btn-menu').click(function(){
    $('.contenedor-menu .menu').slideToggle();
});

$(window).resize(function(){
if($(document).width() > 450){
    $('.contenedor-menu .menu').css({'display' : 'block'});

}
if($(document).width() < 450){
    $('.contenedor-menu .menu').css({'display' : 'none'});
    $('.menu li ul').slideUp();

}
});