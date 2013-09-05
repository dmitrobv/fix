/* Falling down the main menu */

$(document).ready(function(){
    var coords = {
        top: 10,
        left: 50,
    };
    menuDropDown(coords, 0);
})

function menuDropDown(coords, pos, menutype) {
        var menuitem = "div.cat_menu_line_item#cat";

        if(pos > 16) { return false; }
        else $(menuitem+(pos+1)).css('left', coords.left = coords.left+50).animate({ 'top':coords.top },100);
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

/* TOOLBOX BEHAIVOUR*/
$(document).ready(function(){
    var toolbox = $("div.toolbox"),
    toolboxparts = {
        top: 'div.toolbox_top',
        bottom: 'div.toolbox_bottom',
        complete: 'div.toolbox_complete',
        inner: 'div.toolbox_inner',
        minheight: '116',
        maxheight: '471'
    };


    toolbox.hover(  function(){
                        $(toolboxparts.complete).hide();
                        $(toolboxparts.top).show();
                        $(toolboxparts.bottom).show();
                        $(toolboxparts.inner).show().stop(true,true).animate({'height': toolboxparts.maxheight }, 500);
                        $(this).css({'height':toolboxparts.maxheight});
                    },
                    function(){
                        $(toolboxparts.inner).stop(true,true).animate({'height':'0'},500,function(){ $(this).hide(); $(toolboxparts.top).hide(); $(toolboxparts.bottom).hide(); $(toolboxparts.complete).show(); });
                        $(this).css({'height':toolboxparts.minheight});
                    });
})

/********************/