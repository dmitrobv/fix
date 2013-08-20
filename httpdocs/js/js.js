$(document).ready(function(){
    $(".cat_menu_line_item").on('mouseenter',function(){
        $(".slogan").css('visibility','hidden');
        $('#'+$(this).attr('id')+'_descr').show().stop().animate({'opacity':'1'});
        $(this).animate({'height':'64px','width':'64px','margin-top':'-=20px'},100);
    })
    $(".cat_menu_line_item").on('mouseleave',function(){
        $(".slogan").css('opacity','0').css('visibility','visible').animate({'opacity':'1'},300);
        $('#'+$(this).attr('id')+'_descr').stop().animate({'opacity':'0'}).hide();
        $(this).animate({'height':'45px','width':'45px','margin-top':'+=20px'},100);
    })
})