$(document).ready(function(){
    $(window).scroll(function(){
        var width = $(window).width();

        if(width > 800){
            var scroll = $(window).scrollTop();

            $('header .texto').css({
                'transform': 'translate(0px,' + scroll / 2 + '%)'
            });

            $('.sectionAcerca article').css({
                'transform': 'translate(0px, -' + scroll / 4 + '%)'
            });
        }
    });

    $(window).resize(function(){
        var width = $(window).width();

        if(width < 800){
          $('.sectionAcerca article').css({
                'transform': 'translate(0px, 0px)'
            });
        }
    });
      

});