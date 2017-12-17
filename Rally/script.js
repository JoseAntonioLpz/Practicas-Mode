$(document).ready(function(){
    $(".videos > div").on('click' , function(e){
        var alt = $(this).data('alt');
        $('#video').attr('src', alt);
    });
    
    var liNoticias = $("#noticias > li");
    
    liNoticias.on('click' , function(){
        
        liNoticias.removeClass('select');
        $(this).addClass('select');
        $('.bodyNoticias').addClass('oculto');
        
        var noticia = $(this).data('notice');
        
        noticia = '#' + noticia;
        
        $(noticia).removeClass('oculto');
    });
    
    var redes = $(".headRedes > div");
    
    redes.on('click', function() {
        redes.removeClass('redSeleccionada');
        $(this).addClass('redSeleccionada');
        
        $('.bodyRedes').addClass('oculto');
        
        var red = $(this).data('red');
        
        red = '#' + red;
        
        $(red).removeClass('oculto');
    });
});