/* Falling down the main menu */

$(document).ready(function(){
    var coords = {
        top: 30,
        left: 510
    }
        menuDropDown(coords, 0);
})

function menuDropDown(coords, pos) {
    if(pos > 16) return false;
    $("div.cat_menu_line_item#cat"+(pos+1)).css('left', coords.left = coords.left+50).animate({'top':coords.top },100);
    setTimeout(function() { menuDropDown(coords, ++pos) }, 50);
}
/*******************************/


/* Main Menu Siding accordeon functionality */
$(document).ready(function(){
    var main_menu_item = {
            obj : $(".cat_menu_line_item"),
            def_h : '45px',
            def_w : '45px',
            zoom_h: '64px',
            zoom_w: '64px',
            top_shift : '=9px',
            left_shift: '=10px'
        },
        slogan = $(".slogan");


    main_menu_item.obj.on('mouseenter',function(){
        slogan.css('visibility','hidden');
        $(this).stop(false, true).css('z-index','100').animate({'height': main_menu_item.zoom_h,'width': main_menu_item.zoom_w,'top': '-'+main_menu_item.top_shift,'left': '-'+main_menu_item.left_shift },100);
        $('#'+$(this).attr('id')+'_descr').show().stop().animate({'opacity':'1'});
    })
    main_menu_item.obj.on('mouseout',function(){
        slogan.css('opacity','0').css('visibility','visible').animate({'opacity':'1'},300);
        $(this).stop(false, true).css('z-index','1').animate({'height': main_menu_item.def_h,'width': main_menu_item.def_w,'top': '+'+main_menu_item.top_shift, 'left': '+'+main_menu_item.left_shift },100);
        $('#'+$(this).attr('id')+'_descr').stop().animate({'opacity':'0'}).hide();
    })
})
/********************************************/