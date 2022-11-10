$(document).ready(function () {

    // Set ScrollMagic controller 
    // var controller_footer_anim = new ScrollMagic.Controller({
    //     container: "body"
    // })

    // var scene = new ScrollMagic.Scene({
    //         triggerElement: "#footer",
    //         triggerHook: 1,
    //         reverse: true
    //     })
    //     .offset($(window).height())
    //     .setPin("#footer > .container-100")
    //     //.addIndicators({name: "pin scene", colorEnd: "#FFFFFF"})
    //     .addTo(controller_footer_anim)
    
    

        //   $(".footer").parent().append('<div class="footer-margin"></div>');
    
    $(".footer-margin").css({'height':$(".footer .container").height() + 100 +"px" });
})