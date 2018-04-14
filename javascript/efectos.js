$(document).ready(function(){

    //Efecto menu
    $('.menu a').each(function(index,elemento){
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({top: '0'},1500 + (index * 500));
    });

    //Efecto header
    if($(window).width() > 800){
        $('header .texto').css({
            opacity: 0,
            marginTop: 0
        });

        $('header .texto').animate({
            opacity: 1,
            marginTop: -52
        },1500);
        
    }

    var acercaDe = $('#sectionAcerca').offset().top,
        menu = $('#platillos').offset().top,
        galeria = $('#sectionGaleria').offset().top,
        ubicacion = $('#sectionUbicacion').offset().top;

    $('#acerca').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe - 220
        },500);
    });

    $('#menu').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu
        },500);
    });

    $('#galeria').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria
        },500);
    });

    $('#ubicacion').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion
        },500);
    });
});