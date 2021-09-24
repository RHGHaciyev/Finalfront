$("document").ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 70) {
            $('.first').css({ "position": "fixed", "padding-bottom": "0px", "padding-top": "5px", "z-index": "30", "width": "100%", "transition": ".3s ease-in-out" });
        } else {
            $('.first').css({ "position": "relative", "padding-bottom": "25px", "padding-top": "25px", "transition": ".3s ease-in-out" });
        }
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').click(function(){
        $('html, body').animate({scrollTop : 0},1000);
        $(this).css({"color":"white"})
        return false;
});


    //Start responsive swipe_menu
    var click = true;
    var index = 1;
    $(".span").click(function () {
        if (click) {
            $(".swipe").css({ "left": "0px", "transition": ".3s ease" })
            $(".middle").css({ "transform": "rotate(180deg)", "transition": ".3s ease" })
            $(".top_line").css({ "transform": "rotate(140deg)", "width": "18px", "top": "5px", "left": "6px", "transition": ".3s ease" })
            $(".bottom").css({ "transform": "rotate(45deg)", "width": "18px", "top": "16px", "left": "6px", "transition": ".3s ease" })

            click = false;
            index++;
        }
        else {
            $(".swipe").css({ "left": "-264px", "transition": ".5s ease" })
            $(".middle").css({ "transform": "rotate(180deg)", "transition": ".5s ease" })
            $(".top_line").css({ "transform": "rotate(180deg)", "width": "30px", "top": "0px", "left": "7px", "transition": ".5s ease" })
            $(".bottom").css({ "transform": "rotate(180deg)", "width": "30px", "top": "20px", "left": "7px", "transition": ".5s ease" })
            click = true;
        }

    })

    //End responsive swipe_menu

    //  slider
    $(".dot1").click(function () {
        var index = 1;
        $(".second").css({ "background": "url(images/home-slide-1.jpg)", "transition": "all .5s ease-out" });
        $(".second").css({ "background-size": "cover" });
        index++;

    })
    $(".dot2").click(function () {
        var index = 1;
        $(".second").css({ "background": "url(images/home-slide-2.jpg)", "transition": "all .5s ease-out" });
        $(".second").css({ "background-size": "cover" });
        $(".second .content h2").html('<h2> Achieve More with Mark Griffin’sCoaching Sessions </h2>');
        $(".second .content p").html('<p>First business coaching session is a great way to start, whether it is for a small company owner or for a board of directors. Mark Griffin has a right solution for you! </p>');
        index++;
    })
    $(".dot3").click(function () {
        var index = 1;
        $(".second").css({ "background": "url(images/home-slide-3.jpg)", "transition": "all .5s ease-out" });
        $(".second").css({ "background-size": "cover" });
        $(".second .content h2").html('<h2> Discover More Resources for Your Business </h2>');
        $(".second .content p").html('<p>Mark Griffin not only provides professional business coaching, he also offers free access to exclusive business podcasts and literature to help you improve your company. </p>');
        index++;
    })


    // slider

    $(".right_arrow").click(function () {
        if ($(".slider").css({ "margin-left": "0px" })) {
            $(".slider").animate({ "margin-left": "-326px" }, 150);
        }
    })
    $(".left_arrow").click(function () {
        if ($(".slider").css({ "margin-left": "-326px" })) {
            $(".slider").animate({ "margin-left": "0px" }, 150);
            $('.slider .item:last').after($('.slider .item:first'));
        }
    })

    // Second slider
    $(".wid .icons .down").click(function () {
        $(".first_info").css({ "display": "none" })
        $(".second_info").css({ "display": "block" })


    })
    $(".wid .icons .up").click(function () {
        $(".second_info").css({ "display": "none" });
        $(".first_info").css({ "display": "block" })

    })


    $(".first_small").click(function () {
        $(".images_big").css({ "display": "block" })
          $(".first_big").css({ "display": "block" })
        
    })

    $(".second_small").click(function () {
          $(".images_big").css({ "display": "block" })
          $(".second_big").css({ "display": "block" })
    })
    $(".third_small").click(function () {
        $(".images_big").css({ "display": "block" })
          $(".third_big").css({ "display": "block" })
    })
    $(".four_small").click(function () {
        $(".images_big").css({ "display": "block" })
         $(".four_big").css({ "display": "block" })
    })
    $(window).click(function(event) {
        if(event.target.className=="images_big"){
            $(".images_big").fadeOut(500);
        }
    });
   
})
